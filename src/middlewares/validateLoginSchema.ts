import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import { ApplicationError } from "../error/ApplicationError";

const loginSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

export function validateLoginSchema(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (err) {
    console.log(err);
    throw new ApplicationError(`ERROR! Something wrong happened! path:validateLoginSchema`, 400);
  }
}
