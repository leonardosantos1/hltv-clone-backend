import express from "express";
import * as dotenv from "dotenv";
import "express-async-errors";
import "reflect-metadata";
import "./shared/container";
import { router } from "./routes";
dotenv.config();

const app = express();

app.use(express.json());

const port = 3333 || process.env.PORT;

app.use(router);

app.listen(port, () => {
  console.log(`Application On at the port: http://localhost:${port}`);
});
