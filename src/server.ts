import dotenv from 'dotenv';
import express from 'express';
import morgan from "morgan";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import { corsConfig } from './config/cors';
import { swaggerDocument } from './docs/swagger';

import routeAccounts from './modules/accounts/routes/accounts.routes';
import routeCategories from './modules/categories/routes/categories.routes';


dotenv.config();
// pool.connect();

const app = express();
app.use(cors(corsConfig));
app.use(morgan("dev"));


// * Database routes
app.use(express.json());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/accounts", routeAccounts);
app.use("/api/categories", routeCategories);


export default app;