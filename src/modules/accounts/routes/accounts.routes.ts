import { Router } from "express";
import { AccountsController } from "../controllers/accounts.controllers";

const routeAccounts = Router();

routeAccounts.get("/", AccountsController.getAllAccounts);


export default routeAccounts;