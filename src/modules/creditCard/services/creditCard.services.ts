import { creditCardSchema } from "../index"
import { CreditCardRepository } from "../repository/creditCard.repository";

export class CreditCardsServices {
    private repository = new CreditCardRepository();

    async getAllCreditCard() {
        return this.repository.getAllCreditCard();
    }

    async getCreditCardById({ creditCard_id }: { creditCard_id: string }) {
        return this.repository.getCreditCardById({ creditCard_id });
    }

    async createCreditCard({ creditCardsData }: { creditCardsData: typeof creditCardSchema }) {
        return this.repository.createCreditCard(creditCardsData);
    }

    async updateCreditCard({ creditCard_id, creditCardsData }: { creditCard_id: string, creditCardsData: typeof creditCardSchema }) {
        return this.repository.updateCreditCard({ creditCard_id, creditCardsData });
    }
}