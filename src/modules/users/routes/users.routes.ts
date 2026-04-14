import { Router } from "express";
import { UsersController } from "../index";
import { handleInputErrors } from "../../../middleware/validationEndPoint";
import { body, param } from "express-validator";

const routeUsers = Router();

routeUsers.get("/", UsersController.getAllUsers);

routeUsers.get("/:user_id",
    param("user_id").isUUID().withMessage("El id debe de ser válido"),
    param("user_id").notEmpty().withMessage("El id no debe de estar vacio"),
    handleInputErrors,
    UsersController.getUserById
);

routeUsers.post("/",
    body("clerk_id").notEmpty().withMessage("El id de clerk es requerido"),
    handleInputErrors,
    UsersController.createUser
);

routeUsers.put("/:user_id",
    param("user_id").isUUID().withMessage("El id debe de ser válido"),
    param("user_id").notEmpty().withMessage("El id del usuario es requerido"),
    body("clerk_id").notEmpty().withMessage("El id de clerk es requerido"),
    handleInputErrors,
    UsersController.updateUser
);


export default routeUsers;