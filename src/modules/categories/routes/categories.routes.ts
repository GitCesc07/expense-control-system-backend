import { Router } from "express";
import { CategoriesController } from "../index";
import { handleInputErrors } from "../../../middleware/validationEndPoint";
import { body, param } from "express-validator";
import { authMiddleware } from "../../../middleware/auth.middleware";

const routeCategories = Router();

routeCategories.get("/",
    authMiddleware,
    CategoriesController.getAllCategories
);

routeCategories.get("/:category_id",
    param("category_id").isUUID().withMessage("El id debe de ser válido"),
    param("category_id").notEmpty().withMessage("El id no debe de estar vacio"),
    handleInputErrors,
    authMiddleware,
    CategoriesController.getCategoriesById
);

routeCategories.post("/",
    body("user_id").isUUID().withMessage("El id debe de ser válido"),
    body("name").isLength({ min: 5, max: 60 }).withMessage("El nombre debe tener entre 10 y 60 caracteres"),
    body("type").isIn(["Ingreso", "Egreso"]).withMessage("Tipo de categoría no válido"),
    handleInputErrors,
    authMiddleware,
    CategoriesController.createCategory
);

routeCategories.put("/:category_id",
    param("category_id").isUUID().withMessage("El id debe de ser válido"),
    param("category_id").notEmpty().withMessage("El id de la cuenta es requerido"),
    body("user_id").isUUID().withMessage("El id debe de ser válido"),
    body("name").isLength({ min: 5, max: 60 }).withMessage("El nombre debe tener entre 10 y 60 caracteres"),
    body("type").isIn(["Ingreso", "Egreso"]).withMessage("Tipo de categoría no válido"),
    handleInputErrors,
    authMiddleware,
    CategoriesController.updateCategory
);


export default routeCategories;