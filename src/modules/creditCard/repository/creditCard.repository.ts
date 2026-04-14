import { pool } from "../../../database/db";
import { creditCardSchema } from "../index";

export class CreditCardRepository {
    async getAllCreditCard() {
        const query = "SELECT creditCard_id, user_id, name, bank, credit_limit, cut_date, payment_day, available_balance, balance_used, creation_date FROM credit_card;";
        const data = await pool.query(query);
        return data.rows;
    }
    async getCreditCardById({ creditCard_id }: { creditCard_id: string }) {
        const query = "SELECT creditCard_id, user_id, name, bank, credit_limit, cut_date, payment_day, available_balance, balance_used, creation_date FROM credit_card WHERE creditCard_id = $1;";
        const data = await pool.query(query, [creditCard_id]);
        return data.rows;
    }

    async createCreditCard(creditCardData: typeof creditCardSchema) {
        const {
            user_id,
            name,
            bank,
            credit_limit,
            cut_date,
            payment_day,
            available_balance,
            balance_used
        } = creditCardSchema.parse(creditCardData);

        const query = "INSERT INTO credit_card(user_id, name, bank, credit_limit, cut_date, payment_day, available_balance, balance_used, creation_date) VALUES($1, $2, $3, $4, $5, $6, $7, $8, now())"
        await pool.query(
            query,
            [
                user_id,
                name,
                bank,
                credit_limit,
                cut_date,
                payment_day,
                available_balance,
                balance_used
            ]
        );

        return {
            message: "Tarjeta de crédito creada exitosamente"
        }
    }

    async updateCreditCard({ creditCard_id, creditCardsData }: { creditCard_id: string, creditCardsData: typeof creditCardSchema }) {

        const {
            name,
            bank,
            credit_limit,
            cut_date,
            payment_day,
            available_balance,
            balance_used
        } = creditCardSchema.parse(creditCardsData);

        const query = "UPDATE credit_card SET name = $1, bank = $2, credit_limit = $3, cut_date = $4, payment_day = $5, available_balance = $6, balance_used = $7, modification_date = now() WHERE creditCard_id = $8";
        await pool.query(query,
            [
                name,
                bank,
                credit_limit,
                cut_date,
                payment_day,
                available_balance,
                balance_used,
                creditCard_id
            ]
        );

        return {
            message: "Tarjeta de crédito actualizada exitosamente"
        }
    }
}