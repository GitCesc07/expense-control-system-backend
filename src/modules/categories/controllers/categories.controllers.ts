import { Request, Response } from "express";
import { CategoryServices } from "../services/categories.services";
import { categorySchema } from "../index";

const services = new CategoryServices();

export class CategoriesController {
    static async getAllCategories(req: Request, res: Response) {
        try {
            const data = await services.getAllCategory();
            res.json(data);
        } catch (error: unknown) {
            res.status(500).json({ error: "Ha ocurrido un error inesperado. se ha encontrado un problema en el servidor." });
        }
    }

    static async getCategoriesById(req: Request, res: Response) {
        try {
            const data = await services.getCategoryById({ category_id: req.params.category_id });
            res.json(data);
        } catch (error: unknown) {
            res.status(500).json({ error: "Ha ocurrido un error inesperado. se ha encontrado un problema en el servidor." });
        }
    }

    static async createCategory(req: Request, res: Response) {
        try {
            // * Validar los datos de entrada con Zod
            const validationResult = categorySchema.safeParse(req.body);

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

            // * Si la validación es exitosa, crear la categoría
            const data = await services.createCategory({ categoryData: req.body });
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

    static async updateCategory(req: Request, res: Response) {
        try {
            // * Validar los datos de entrada con Zod
            const validationResult = categorySchema.safeParse(req.body);

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

            // * Si la validación es exitosa, crear la categoría
            const data = await services.updateCategory({ category_id: req.params.category_id, categoryData: req.body });
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