import { Request, Response } from "express";
import { UsersServices } from "../services/users.services";
import { usersSchema } from "../index";

const services = new UsersServices();

export class UsersController {
    static async getAllUsers(req: Request, res: Response) {
        try {
            const data = await services.getAllUsers();
            res.json(data);
        } catch (error: unknown) {
            res.status(500).json({ error: "Ha ocurrido un error inesperado. se ha encontrado un problema en el servidor." });
        }
    }

    static async getUserById(req: Request, res: Response) {
        try {
            const data = await services.getUserById({ clerkId: req.params.user_id });
            res.json(data);
        } catch (error: unknown) {
            res.status(500).json({ error: "Ha ocurrido un error inesperado. se ha encontrado un problema en el servidor." });
        }
    }

    static async createUser(req: Request, res: Response) {
        try {
            // * Validar los datos de entrada con Zod
            const validationResult = usersSchema.safeParse(req.userId);

            if (!validationResult.success) {
                // * Extraer y formatear los mensajes de error de Zod
                const errorMessages = validationResult.error.issues.map((err: any) => ({
                    field: err.path.join('.'),
                    message: err.message
                }));

                return res.status(400).json({
                    success: false,
                    message: "Error de validación",
                    errors: errorMessages
                });
            }

            // * Si la validación es exitosa, crea el usuario
            const data = await services.createUser({ clerkId: req.body });
            res.status(201).json({
                success: true,
                message: data.message
            });
        } catch (error: unknown) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Ha ocurrido un error inesperado. se ha encontrado un problema en el servidor."
            });
        }
    }

    static async updateUser(req: Request, res: Response) {
        try {
            // * Validar los datos de entrada con Zod
            const validationResult = usersSchema.safeParse(req.userId);

            if (!validationResult.success) {
                // * Extraer y formatear los mensajes de error de Zod
                const errorMessages = validationResult.error.issues.map((err: any) => ({
                    field: err.path.join('.'),
                    message: err.message
                }));

                return res.status(400).json({
                    success: false,
                    message: "Error de validación",
                    errors: errorMessages
                });
            }

            // * Si la validación es exitosa, crea el usuario
            const data = await services.updateUser({ user_id: req.params.user_id, userData: req.body });
            res.status(201).json({
                success: true,
                message: data.message
            });
        } catch (error: unknown) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Ha ocurrido un error inesperado. se ha encontrado un problema en el servidor."
            });
        }
    }
}