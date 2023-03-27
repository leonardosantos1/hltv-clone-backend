import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { ApplicationError } from "../error/ApplicationError";

const idParamsSchema = z.string().uuid()

export function validatePlayerParamsId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    idParamsSchema.parse(req.params.id);
    next();
  } catch (err) {
    console.log(err);
    throw new ApplicationError(`ERROR! Something wrong happened! path:validatePlayerParamsId`,400);

  }
}
