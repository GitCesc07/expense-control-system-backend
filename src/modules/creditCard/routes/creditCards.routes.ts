import { Router } from "express";
import { CreditCardsController } from "../index";
import { handleInputErrors } from "../../../middleware/validationEndPoint";
import { body, param } from "express-validator";
import { authMiddleware } from "../../../middleware/auth.middleware";

const routeCreditCards = Router();

routeCreditCards.get("/",
    authMiddleware,
    CreditCardsController.getAllCreditCards
);

routeCreditCards.get("/:account_id",
    param("creditCard_id").isUUID().withMessage("El id debe de ser válido"),
    param("creditCard_id").notEmpty().withMessage("El id no debe de estar vacio"),
    handleInputErrors,
    authMiddleware,
    CreditCardsController.getCreditCardsById
);

routeCreditCards.post("/",
    body("user_id").isUUID().withMessage("El id debe de ser válido"),
    body("name").isLength({ min: 10, max: 60 }).withMessage("El nombre debe tener entre 10 y 60 caracteres"),
    body("bank").notEmpty().withMessage("El banco es requerido"),
    body("credit_limit").isNumeric().withMessage("El limite del crédito debe ser un número"),
    body("cut_date").notEmpty().withMessage("La fecha del corte es requerida"),
    body("payment_day").notEmpty().withMessage("El día de pago es requerido"),
    handleInputErrors,
    authMiddleware,
    CreditCardsController.createCreditCard
);

routeCreditCards.put("/:creditCard_id",
    param("creditCard_id").isUUID().withMessage("El id debe de ser válido"),
    param("creditCard_id").notEmpty().withMessage("El id de la cuenta es requerido"),
    body("user_id").isUUID().withMessage("El id debe de ser válido"),
    body("name").isLength({ min: 10, max: 60 }).withMessage("El nombre debe tener entre 10 y 60 caracteres"),
    body("bank").notEmpty().withMessage("El banco es requerido"),
    body("credit_limit").isNumeric().withMessage("El limite del crédito debe ser un número"),
    body("cut_date").notEmpty().withMessage("La fecha del corte es requerida"),
    body("payment_day").notEmpty().withMessage("El día de pago es requerido"),
    handleInputErrors,
    authMiddleware,
    CreditCardsController.updateCreditCard
);


export default routeCreditCards;