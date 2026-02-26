import dotenv from 'dotenv';
import express from 'express';
import morgan from "morgan";
import cors from "cors";
import { corsConfig } from './config/cors';

import routeAccounts from './modules/accounts/routes/accounts.routes';


dotenv.config();
// pool.connect();

const app = express();
app.use(cors(corsConfig));
app.use(morgan("dev"));

// * Database routes
app.use(express.json());
app.use("/api/accounts", routeAccounts);


export default app;