import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const updatePlayerSchema = z.object({
  nickname: z.string().min(2).optional(),
  is_coach: z.boolean().optional(),
  name: z.string().min(3).optional(),
  nationality: z.string().min(2).max(2).optional(),
  title_id: z.string().nullable().optional(),
  age: z.number().min(13).optional(),
});

export function validatePlayerUpdateSchema(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    updatePlayerSchema.parse(req.body);
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
}
