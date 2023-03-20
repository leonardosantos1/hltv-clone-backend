import { Request, Response, NextFunction } from "express";
import { z } from "zod";

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
    return res.status(400).json({ error: err });
  }
}
