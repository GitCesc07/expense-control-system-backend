import { Request, Response } from "express";
import { UsersServices } from "../../users/services/users.services";

const services = new UsersServices();

export class AuthController {
    static async signInClerk(req: Request, res: Response) {
        try {

            const exists = await services.getUserById({ clerkId: req.userId! });

            if (exists.length <= 0) {
                // * Si la validación es exitosa, crea el usuario
                const data = await services.createUser({ clerkId: req.userId! });
                res.status(201).json({
                    success: true,
                    message: data.message
                });
            }
        } catch (error: unknown) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Ha ocurrido un error inesperado. se ha encontrado un problema en el servidor."
            });
        }
    }
}