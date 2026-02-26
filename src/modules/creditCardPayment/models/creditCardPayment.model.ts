// * interface credit card payment
export interface CreditCardPaymentInterface {
    creditCardPayment_id: string,
    user_id: string,
    creditCard_id: string,
    account_id: string,
    payment_ammount: Float32Array,
    payment_date: string,
    creation_date: string,
    modification_date: string
}
