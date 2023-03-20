import { Request, Response, NextFunction } from "express";

import { z } from "zod";

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
    return res.status(400).json({ error: err });
  }
}
