import { z } from "zod";
import { accountType } from "../../../utils"

// * interface accounts
export const accountSchema = z.object({
    account_id: z.string().optional().nullable(),
    user_id: z.string()
        .nonempty("El id del usuario no puede estar vacio"),
    name: z.string()
        .max(60, "El nombre de la cuenta no puede superar los 60 caracteres")
        .min(5, "El nombre de la cuenta no puede ser menor a 5 caracteres")
        .nonempty("El nombre de la cuenta no puede estar vacio"),
    description: z.string()
        .optional()
        .nullable(),
    type: accountType,
    initial_balance: z.number()
        .nonnegative("El saldo inicial no puede ser negativo"),
    current_balance: z.number(),
    currency: z.string()
        .nonempty("El tipo de moneda no debe de estar vacio")
});


const account_id = {
    type: "string",
    description: "Auto-generated account ID"
};
const user_id = {
    type: "string",
    description: "Owner user ID"
};
const name = {
    type: "string",
    description: "Account name"
};
const description = {
    type: "string",
    description: "Account description"
};
const type = {
    type: "string",
    enum: ["savings", "checking", "credit", "investment"],
    description: "Account type"
};
const initial_balance = {
    type: "number",
    format: "float",
    description: "Initial balance"
};
const current_balance = {
    type: "number",
    format: "float",
    description: "Current balance"
};
const currency = {
    type: "string",
    description: "Currency (example: USD, EUR, etc)"
};

export const AccountsInterface = {
    type: "object",
    required: [
        "user_id",
        "name",
        "description",
        "type",
        "initial_balance",
        "current_balance",
        "currency"
    ],
    properties: {
        user_id: user_id,
        name: name,
        description: description,
        type: type,
        initial_balance: initial_balance,
        current_balance: current_balance,
        currency: currency
    }
}