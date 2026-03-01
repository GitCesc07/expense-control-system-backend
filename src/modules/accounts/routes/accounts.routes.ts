import { Router } from "express";
import { AccountsController } from "../index";
import { handleInputErrors } from "../../../middleware/validationEndPoint";
import { body, param } from "express-validator";

const routeAccounts = Router();

routeAccounts.get("/", AccountsController.getAllAccounts);

routeAccounts.get("/:account_id",
    param("account_id").isUUID().withMessage("El id debe de ser válido"),
    param("account_id").notEmpty().withMessage("El id no debe de estar vacio"),
    handleInputErrors,
    AccountsController.getAccountsById
);

routeAccounts.post("/", 
    body("user_id").isUUID().withMessage("El id debe de ser válido"),
    body("name").isLength({ min: 10, max: 60 }).withMessage("El nombre debe tener entre 10 y 60 caracteres"),
    body("type").isIn(["Banco", "Efectivo", "Billetera Digital"]).withMessage("Tipo de cuenta no válido"),
    body("initial_balance").isNumeric().withMessage("El balance inicial debe ser un número"),
    body("currency").notEmpty().withMessage("La moneda es requerida"),
    handleInputErrors,
    AccountsController.createAccount
);

routeAccounts.put("/:account_id", 
    param("account_id").isUUID().withMessage("El id debe de ser válido"),
    param("account_id").notEmpty().withMessage("El id de la cuenta es requerido"),
    body("user_id").isUUID().withMessage("El id debe de ser válido"),
    body("name").isLength({ min: 10, max: 60 }).withMessage("El nombre debe tener entre 10 y 60 caracteres"),
    body("type").isIn(["Banco", "Efectivo", "Billetera Digital"]).withMessage("Tipo de cuenta no válido"),
    body("initial_balance").isNumeric().withMessage("El balance inicial debe ser un número"),
    body("currency").notEmpty().withMessage("La moneda es requerida"),
    handleInputErrors,
    AccountsController.updateAccount
);


export default routeAccounts;