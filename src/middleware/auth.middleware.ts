import { NextFunction, Request, Response } from "express";
import { verifyToken } from "@clerk/backend"

declare global {
    namespace Express {
        interface Request {
            userId?: string
        }
    }
}

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Error de autenticación",
                errors: "Token requerido"
            });
        }

        const token = authHeader.split(" ")[1];
        const payload = await verifyToken(token, {
            secretKey: process.env.CLERK_SECRET_KEY!
        });

        req.userId = payload.sub;
    } catch (error: unknown) {
        if (error) {
            return res.status(401).json({
                success: false,
                message: "Error de autenticación",
                errors: error
            });
        }
    }
    next();
}