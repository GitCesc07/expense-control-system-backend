import { Request, Response } from "express";
import { CreditCardsServices } from "../services/creditCard.services";
import { creditCardSchema } from "../index";

const services = new CreditCardsServices();

export class CreditCardsController {
    static async getAllCreditCards(req: Request, res: Response) {
        try {
            const data = await services.getAllCreditCard();
            res.json(data);
        } catch (error: unknown) {
            res.status(500).json({ error: "Ha ocurrido un error inesperado. se ha encontrado un problema en el servidor." });
        }
    }

    static async getCreditCardsById(req: Request, res: Response) {
        try {
            const data = await services.getCreditCardById({ creditCard_id: req.params.creditCard_id });
            res.json(data);
        } catch (error: unknown) {
            res.status(500).json({ error: "Ha ocurrido un error inesperado. se ha encontrado un problema en el servidor." });
        }
    }

    static async createCreditCard(req: Request, res: Response) {
        try {
            // * Validar los datos de entrada con Zod
            const validationResult = creditCardSchema.safeParse(req.body);

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

            // * Si la validación es exitosa, crear la cuenta
            const data = await services.createCreditCard({ creditCardsData: req.body });
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

    static async updateCreditCard(req: Request, res: Response) {
        try {
            // * Validar los datos de entrada con Zod
            const validationResult = creditCardSchema.safeParse(req.body);

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

            // * Si la validación es exitosa, crear la cuenta
            const data = await services.updateCreditCard({ creditCard_id: req.params.creditCard_id, creditCardsData: req.body });
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