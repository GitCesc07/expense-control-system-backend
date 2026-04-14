import swaggerJSDoc from "swagger-jsdoc";
import {
    AccountsInterface,
    CategoriesInterface,
    CreditCardInterface,
    CreditCardPaymentInterface
} from "../modules";

export const swaggerDocument = swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Expense Control System API",
            version: "1.0.0",
            description: "Project to control personal entries and exits"
        },
        servers: [
            {
                url: "http://localhost:4000/api",
            }
        ],
        components: {
            schemas: {
                AccountsInterface: AccountsInterface,
                CategoriesInterface: CategoriesInterface,
                CreditCardInterface: CreditCardInterface,
                CreditCardPaymentInterface: CreditCardPaymentInterface
            }
        }
    },

    apis: ["src/modules/**/*.docs.ts"]
});