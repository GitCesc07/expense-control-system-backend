import { Request, Response } from "express";
import { CreditCardPaymentServices } from "../services/creditCardPayment.services";
import { creditCardPaymentSchema } from "../index";

const services = new CreditCardPaymentServices();

export class CreditCardPaymentController {
    static async getAllCreditCardPayment(req: Request, res: Response) {
        try {
            const data = await services.getAllCreditCardPayment();
            res.json(data);
        } catch (error: unknown) {
            res.status(500).json({ error: "Ha ocurrido un error inesperado. se ha encontrado un problema en el servidor." });
        }
    }

    static async getCreditCardPaymentById(req: Request, res: Response) {
        try {
            const data = await services.getCreditCardPaymentById({ creditCardPayment_id: req.params.creditCardPayment_id });
            res.json(data);
        } catch (error: unknown) {
            res.status(500).json({ error: "Ha ocurrido un error inesperado. se ha encontrado un problema en el servidor." });
        }
    }

    static async createCreditCardPayment(req: Request, res: Response) {
        try {
            // * Validar los datos de entrada con Zod
            const validationResult = creditCardPaymentSchema.safeParse(req.body);

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
            const data = await services.createCreditCardPayment({ creditCardPaymentData: req.body });
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

    static async updateCreditCardPayment(req: Request, res: Response) {
        try {
            // * Validar los datos de entrada con Zod
            const validationResult = creditCardPaymentSchema.safeParse(req.body);

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
            const data = await services.updateCreditCardPayment({ creditCardPayment_id: req.params.creditCardPayment_id, creditCardPaymentData: req.body });
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