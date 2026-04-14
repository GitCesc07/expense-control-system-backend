import { Router } from "express";
import { authMiddleware } from "../../../middleware/auth.middleware";
import { AuthController } from "../controllers/auth.controllers";


const routeAuth = Router();

routeAuth.post("/sing-in",
    authMiddleware,
    AuthController.signInClerk
);

export default routeAuth;