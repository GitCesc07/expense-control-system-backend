import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from "morgan";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import { corsConfig } from './config/cors';
import { swaggerDocument } from './docs/swagger';

import routeAccounts from './modules/accounts/routes/accounts.routes';
import routeCategories from './modules/categories/routes/categories.routes';
import routeCreditCards from './modules/creditCard/routes/creditCards.routes';
import routeCreditCardPayment from './modules/creditCardPayment/routes/creditCardPayment.routes';
import routeUsers from './modules/users/routes/users.routes';
import routeAuth from './modules/auth/routes/auth.routes';

const app = express();
app.use(cors(corsConfig));
app.use(morgan("dev"));


// * Database routes
app.use(express.json());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/accounts", routeAccounts);
app.use("/api/categories", routeCategories);
app.use("/api/creditCards", routeCreditCards);
app.use("/api/creditCardPayments", routeCreditCardPayment);
app.use("/api/users", routeUsers);
app.use("/api/auth", routeAuth);


export default app;