import { creditCardPaymentSchema } from "../index"
import { CreditCardPaymentRepository } from "../repository/creditCardPayment.repository";

export class CreditCardPaymentServices {
    private repository = new CreditCardPaymentRepository();

    async getAllCreditCardPayment() {
        return this.repository.getAllCreditCardPayment();
    }

    async getCreditCardPaymentById({ creditCardPayment_id }: { creditCardPayment_id: string }) {
        return this.repository.getCreditCardPaymentById({ creditCardPayment_id });
    }

    async createCreditCardPayment({ creditCardPaymentData }: { creditCardPaymentData: typeof creditCardPaymentSchema }) {
        return this.repository.createCreditCardPayment(creditCardPaymentData);
    }

    async updateCreditCardPayment({ creditCardPayment_id, creditCardPaymentData }: { creditCardPayment_id: string, creditCardPaymentData: typeof creditCardPaymentSchema }) {
        return this.repository.updateCreditCardPayment({ creditCardPayment_id, creditCardPaymentData });
    }
}