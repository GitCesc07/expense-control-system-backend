import { pool } from "../../../database/db";
import { creditCardPaymentSchema } from "../index";

export class CreditCardPaymentRepository {
    async getAllCreditCardPayment() {
        const query = "SELECT creditCardPayment_id, user_id, creditCard_id, account_id, payment_amount, payment_date, creation_date FROM credit_card_payment;";
        const data = await pool.query(query);
        return data.rows;
    }
    async getCreditCardPaymentById({ creditCardPayment_id }: { creditCardPayment_id: string }) {
        const query = "SELECT user_id, creditCard_id, account_id, payment_amount, payment_date creation_date FROM credit_card_payment WHERE creditCardPayment_id = $1;";
        const data = await pool.query(query, [creditCardPayment_id]);
        return data.rows;
    }

    async createCreditCardPayment(creditCardPaymentData: typeof creditCardPaymentSchema) {
        const {
            creditCard_id,
            user_id,
            account_id,
            payment_amount,
            payment_date
        } = creditCardPaymentSchema.parse(creditCardPaymentData);

        const query = "INSERT INTO credit_card_payment(creditCardPayment_id, user_id, creditCard_id, account_id, payment_amount, payment_date, creation_date) VALUES($1, $2, $3, $4, $5, $6, now())"
        await pool.query(
            query,
            [
                creditCard_id,
                user_id,
                account_id,
                payment_amount,
                payment_date
            ]
        );

        return {
            message: "Pago de tarjeta de crédito realizado exitosamente"
        }
    }

    async updateCreditCardPayment({ creditCardPayment_id, creditCardPaymentData }: { creditCardPayment_id: string, creditCardPaymentData: typeof creditCardPaymentSchema }) {

        const {
            creditCard_id,
            user_id,
            account_id,
            payment_amount,
            payment_date
        } = creditCardPaymentSchema.parse(creditCardPaymentData);

        const query = "UPDATE credit_card_payment SET user_id = $1, creditCard_id = $2, account_id = $3, payment_amount = $4, payment_date = $5, modification_date = now() WHERE credit_card_payment = $8";
        await pool.query(query,
            [
                creditCard_id,
                user_id,
                account_id,
                payment_amount,
                payment_date,
                creditCardPayment_id
            ]
        );

        return {
            message: "El pago de la tarjeta de crédito se actualizó exitosamente"
        }
    }
}