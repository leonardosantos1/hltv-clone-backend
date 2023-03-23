import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { ApplicationError } from "../error/ApplicationError";

const playersSchema = z.object({
    nickname: z.string().min(2).max(15),
    is_coach: z.boolean(),
    name:z.string().min(3),
    nationality:z.string().min(2).max(2),
    title_id: z.string().nullable(),
    age: z.number().min(13)
});

export function validatePlayersInsertSchema(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    playersSchema.parse(req.body);
    next();
  } catch (err) {
    console.log(err);
    throw new ApplicationError(`ERROR! Something wrong happened!`,400);
  }
}
