import { pool } from "../../../database/db";
import { accountSchema } from "../index"

export class AccountRepository {
    async getAllAccount() {
        const query = "SELECT account_id, user_id, name, description, type, initial_balance, current_balance, currency, creation_date FROM accounts;";
        const data = await pool.query(query);
        return data.rows;
    }
    async getAccountById({ account_id }: { account_id: string }) {
        const query = "SELECT name, description, type, initial_balance, current_balance, currency, creation_date FROM accounts WHERE account_id = $1;";
        const data = await pool.query(query, [account_id]);
        return data.rows;
    }

    async createAccount(accountData: typeof accountSchema) {
        const {
            user_id,
            name,
            description,
            type,
            initial_balance,
            current_balance,
            currency
        } = accountSchema.parse(accountData);

        const query = "INSERT INTO accounts(user_id, name, description, type, initial_balance, current_balance, currency, creation_date) VALUES($1, $2, $3, $4, $5, $6, $7, now())"
        await pool.query(
            query,
            [
                user_id,
                name,
                description,
                type,
                initial_balance,
                current_balance,
                currency
            ]
        );

        return {
            message: "Cuenta creada exitosamente"
        }
    }

    async updateAccount({ account_id, accountData }: { account_id: string, accountData: typeof accountSchema }) {

        const {
            name,
            description,
            type,
            initial_balance,
            current_balance,
            currency
        } = accountSchema.parse(accountData);

        const query = "UPDATE accounts SET name = $1, description = $2, type = $3, initial_balance = $4, current_balance = $5, currency = $6, modification_date = now() WHERE account_id = $7";
        await pool.query(query,
            [
                name,
                description,
                type,
                initial_balance,
                current_balance,
                currency,
                account_id
            ]
        );

        return {
            message: "Cuenta actualizada exitosamente"
        }
    }
}