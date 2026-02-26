export interface debtsInterface {
    debts_id: string,
    user_id: string,
    debtor: string,
    reference: string,
    description: string,
    total_debt: Float32Array,
    current_balance: Float32Array,
    payment_deadline: string,
    creation_date: string
}