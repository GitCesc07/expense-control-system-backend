import { z } from "zod";

// * interface accounts
export const debtsSchema = z.object({
    debts_id: z.string()
        .nonempty("El id de la deuda no puede estar vacio"),
    user_id: z.string()
        .nonempty("El id del usuario no puede estar vacio"),
    account_id: z.string()
        .nonempty("El id de la cuenta no puede estar vacio"),
    creditor: z.string()
        .nonempty("El acreedor o persona que le debes no puede estar vacio"),
    reference: z.string()
        .nonempty("La referencia no puede estar vacia"),
    description: z.string().optional().nullable(),
    total_debt: z.number()
        .nonnegative("Debes de agregar un valor no negativo"),
    current_balance: z.number(),
    payment_deadline: z.string()
        .nonempty("La fecha del pago no puede estar vacia")
});


const debts_id = {
    type: "string",
    description: "Auto-generated debts ID"
};

const user_id = {
    type: "string",
    description: "Owner user ID"
};

const account_id = {
    type: "string",
    description: "Account ID"
};

const creditor = {
    type: "string",
    description: "Creditor name"
};

const reference = {
    type: "string",
    description: "Reference"
};

const description = {
    type: "string",
    description: "Description debts"
};

const total_debt = {
    type: "number",
    forma: "float",
    description: "Total debt amount"
};

const current_balance = {
    type: "number",
    forma: "float",
    description: "Current balance"
};

const payment_deadline = {
    type: "string",
    forma: "date",
    description: "Payment deadline"
};


export const debtsInterface = {
    type: "object",
    required: [
        "user_id",
        "creditor",
        "reference",
        "description",
        "total_debt",
        "current_balance",
        "payment_deadline",
        "creation_date"
    ],
    properties: {
        user_id: user_id,
        creditor: creditor,
        reference: reference,
        description: description,
        total_debt: total_debt,
        current_balance: current_balance,
        payment_deadline: payment_deadline        
    }
}