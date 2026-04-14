import { Router } from "express";
import { CreditCardPaymentController } from "../index";
import { handleInputErrors } from "../../../middleware/validationEndPoint";
import { body, param } from "express-validator";
import { authMiddleware } from "../../../middleware/auth.middleware";

const routeCreditCardPayment = Router();

routeCreditCardPayment.get("/",
    authMiddleware,
    CreditCardPaymentController.getAllCreditCardPayment
);

routeCreditCardPayment.get("/:creditCardPayment_id",
    param("creditCardPayment_id").isUUID().withMessage("El id debe de ser válido"),
    param("creditCardPayment_id").notEmpty().withMessage("El id no debe de estar vacio"),
    handleInputErrors,
    authMiddleware,
    CreditCardPaymentController.getCreditCardPaymentById
);

routeCreditCardPayment.post("/",
    body("creditCard_id,").isUUID().withMessage("El id debe de ser válido"),
    body("user_id").isUUID().withMessage("El id del usuario debe de ser válido"),
    body("account_id,").isUUID().withMessage("El id de la cuenta debe de ser válido"),
    body("payment_amount,").isNumeric().withMessage("El pago del crédito debe ser un número"),
    body("payment_date").notEmpty().withMessage("La fecha de pago es requerida"),
    handleInputErrors,
    authMiddleware,
    CreditCardPaymentController.createCreditCardPayment
);

routeCreditCardPayment.put("/:creditCard_id",
    param("creditCardPayment_id").isUUID().withMessage("El id debe de ser válido"),
    body("creditCard_id,").isUUID().withMessage("El id debe de ser válido"),
    body("user_id").isUUID().withMessage("El id del usuario debe de ser válido"),
    body("account_id,").isUUID().withMessage("El id de la cuenta debe de ser válido"),
    body("payment_amount,").isNumeric().withMessage("El pago del crédito debe ser un número"),
    body("payment_date").notEmpty().withMessage("La fecha de pago es requerida"),
    handleInputErrors,
    authMiddleware,
    CreditCardPaymentController.updateCreditCardPayment
);


export default routeCreditCardPayment;