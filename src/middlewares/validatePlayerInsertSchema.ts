import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const playersSchema = z.object({
    nickname: z.string().min(2),
    is_coach: z.boolean(),
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
    return res.status(400).json(err);
  }
}
