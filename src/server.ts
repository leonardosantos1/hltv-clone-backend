import express from "express";
import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import "express-async-errors";
import "reflect-metadata";
import "./shared/container";
import { router } from "./routes";
import { ApplicationError } from "./error/ApplicationError";
dotenv.config();

const app = express();

app.use(express.json());

const port = 3333 || process.env.PORT;

app.use(router);

app.use((err: Error, request: Request, res: Response, next: NextFunction) => {

  
  if (err instanceof ApplicationError) {
      return res.status(err.statusCode).json({ message: err.message })
  }

  return res.status(500).json({ status: "error", message: `Internal Server Error - ${err.message}` })
})

app.listen(port, () => {
  console.log(`Application On at the port: http://localhost:${port}`);
});
