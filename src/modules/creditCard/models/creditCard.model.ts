import { z } from "zod";

// * interface accounts
export const creditCardSchema = z.object({
    creditCard_id: z.string().optional().nullable(),
    user_id: z.string()
        .nonempty("El id del usuario no puede estar vacio"),
    name: z.string()
        .max(60, "El nombre de la cuenta no puede superar los 60 caracteres")
        .min(2, "El nombre de la cuenta no puede ser menor a 2 caracteres")
        .nonempty("El nombre de la cuenta no puede estar vacio"),
    bank: z.string()
        .max(60, "El banco de la tarjeta de crédito no puede superar los 20 caracteres")
        .min(2, "El banco de la tarjeta de crédito no puede ser menor a 2 caracteres")
        .nonempty("El bacno de la tarjeta de crédito no puede estar vacio"),
    credit_limit: z.number()
        .nonnegative("El saldo inicial no puede ser negativo"),
    available_balance: z.number(),
    balance_used: z.number(),
    cut_date: z.string()
        .nonempty("la fecha del corte no puede estar vacia"),
    payment_day: z.string()
        .nonempty("La fecha de pago no puede estar vacia"),

});


const creditCard_id = {
    type: "string",
    description: "Auto-generated credit card ID"
};
const user_id = {
    type: "string",
    description: "Owner user ID"
};
const name = {
    type: "string",
    description: "Credit card name"
};
const bank = {
    type: "string",
    description: "Bank name"
};
const credit_limit = {
    type: "number",
    format: "float",
    description: "Credit limit"
};

const available_balance = {
    type: "number",
    format: "float",
    description: "Available balance"
};

const balance_used = {
    type: "number",
    format: "float",
    description: "Balance used"
};

const cut_date = {
    type: "string",
    format: "date",
    description: "Cut date"
};
const payment_day = {
    type: "string",
    format: "date",
    description: "Payment day"
};

export const CreditCardInterface = {
    type: "object",
    required: [
        "user_id",
        "name",
        "bank",
        "credit_limit",
        "available_balance",
        "balance_used",
        "cut_date",
        "payment_day"
    ],
    properties: {
        user_id: user_id,
        name: name,
        bank: bank,
        credit_limit: credit_limit,
        available_balance: available_balance,
        balance_used: balance_used,
        cut_date: cut_date,
        payment_day: payment_day
    }
}