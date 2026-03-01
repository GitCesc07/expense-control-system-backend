import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";


export const handleInputErrors = (req: Request, res: Response, next: NextFunction) => {
    let error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ 
            success: false,
            message: "Error de validación",
            errors: error.array().map((err: any) => ({ field: err.path, message: err.msg })) 
        })
    }
    next()
}