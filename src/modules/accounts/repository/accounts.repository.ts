import { pool } from "../../../database/db";
import { AccountsInterface } from "../models/accounts.model";
export class AccountRepository {
    async getAllAccount() {
        const query = "SELECT account_id, user_id, name, description, type, initial_balance, current_balance, currency, creation_date FROM accounts;";
        const data = await pool.query(query);        
        return data.rows;
    }

    async createAccount(accountData: AccountsInterface) {

    }
}