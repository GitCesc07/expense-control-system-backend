import { accountType } from "../../../utils";

// * interface accounts
export interface AccountsInterface {
    account_id: string,
    user_id: string,
    name: string,
    description: string,
    type: accountType,
    intial_balance: Float32Array,
    current_balance: Float32Array,
    currency: string,
    creation_date: string
}