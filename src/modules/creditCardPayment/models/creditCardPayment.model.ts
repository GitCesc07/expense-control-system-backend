import { z } from "zod";

// * interface accounts
export const creditCardPaymentSchema = z.object({
    creditCard_id: z.string()
        .nonempty("El id de la tarjeta de crédito no puede estar vacio"),
    user_id: z.string()
        .nonempty("El id del usuario no puede estar vacio"),
    account_id: z.string()
        .nonempty("El id de la cuenta no puede estar vacio"),
    payment_amount: z.number()
        .min(0, "El monto del pago no puede ser 0")
        .nonnegative("El monto del pago no puede ser negativo"),
    payment_date: z.string()
        .nonempty("La fecha del pago no debe de estar vacia")
});


const creditCardPayment_id = {
    type: "string",
    description: "Auto-generated credit card paymentID"
};

const creditCard_id = {
    type: "string",
    description: "Credit card ID"
};

const user_id = {
    type: "string",
    description: "Owner user ID"
};

const account_id = {
    type: "string",
    description: "Account ID"
};

const payment_amount = {
    type: "number",
    format: "float",
    description: "Payment amount"
};

const payment_date = {
    type: "string",
    format: "date",
    description: "Payment date"
};

export const CreditCardPaymentInterface = {
    type: "object",
    required: [
        "creditCard_id",
        "user_id",
        "account_id",
        "payment_amount"
    ],
    properties: {
        creditCard_id: creditCard_id,
        user_id: user_id,
        account_id: account_id,
        payment_amount: payment_amount
    }
}