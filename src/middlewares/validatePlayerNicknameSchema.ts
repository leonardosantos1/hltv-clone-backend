import { Request, Response, NextFunction } from "express";

import { z } from "zod";
import { ApplicationError } from "../error/ApplicationError";

const nicknameSchema = z.string().min(2);

export function validatePlayerNicknameSchema(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    nicknameSchema.parse(req.params.nickname);
    next();
  } catch (err) {
    console.log(err);
    throw new ApplicationError(`ERROR! Something wrong happened!`,400);

  }
}
