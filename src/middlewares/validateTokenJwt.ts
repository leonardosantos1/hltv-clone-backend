import { Request, Response, NextFunction } from "express";
import { ApplicationError } from "../error/ApplicationError";
import { verifyToken } from "../utils/authenticateJwt";

export function validateTokenJwt(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const headerAuthorization = req.headers.authorization;

    if (!headerAuthorization)
      throw new ApplicationError(`ERROR! Something wrong happened!`, 400);

    const [, token] = headerAuthorization.split(" ");

    if (!verifyToken(token))
      throw new ApplicationError(`ERROR! Something wrong happened!`, 400);
    next();
  } catch (err) {
    console.log(err);
    throw new ApplicationError(`ERROR! Something wrong happened!`, 400);
  }
}
