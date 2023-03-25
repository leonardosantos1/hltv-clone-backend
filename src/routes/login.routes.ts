import { Router, Request, Response } from "express";
import { generateToken } from "../utils/authenticateJwt";

const routerLogin = Router();

routerLogin.get(
  "/",
  async (req: Request, res: Response) => {
    const user = { email: "admin@admin.com", password: "ADMIN" };

    const token = generateToken(user);
    return res.status(200).json({ token: token, timeToken: "1d" });
  }
);

export { routerLogin };
