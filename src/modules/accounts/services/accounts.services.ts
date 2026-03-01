import { accountSchema } from "../index"
import { AccountRepository } from "../repository/accounts.repository"

export class AccountsServices {
    private repository = new AccountRepository();

    async getAllAccount() {
        return this.repository.getAllAccount();
    }

    async getAccountById({ account_id }: { account_id: string }) {
        return this.repository.getAccountById({ account_id });
    }

    async createAccount({ accountData }: { accountData: typeof accountSchema }) {
        return this.repository.createAccount(accountData);
    }

    async updateAccount({ account_id, accountData }: { account_id: string, accountData: typeof accountSchema }) {
        return this.repository.updateAccount({ account_id, accountData });
    }
}