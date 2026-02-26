import { AccountRepository } from "../repository/accounts.repository"

export class AccountsServices {
    private repository = new AccountRepository();

    async getAllAccount() {
        return this.repository.getAllAccount();
    }
}