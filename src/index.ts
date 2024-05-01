import express, { Express, Request, Response } from "express";

import routes from "./routes";
import connectDB from "../config/database";
connectDB();

const app: Express = express();
app.use(express.json());

// Fix the CORS errors
app.use(function (req: Request, res: Response, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use('/', routes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));