import { Request, Response } from "express";
import { AccountsServices } from "../services/accounts.services";


const services = new AccountsServices();

export class AccountsController {
    static async getAllAccounts(req: Request, res: Response) {
        try {
            const data = await services.getAllAccount();
            res.json(data);
        } catch (error: unknown) {
            console.log(error);
            res.status(500).json({ error: "Ha ocurrido un error inesperado. se ha encontrado un problema en el servidor." });
        }
    }
}