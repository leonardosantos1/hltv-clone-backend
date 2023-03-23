import jwt from "jsonwebtoken";

export function generateToken(payload: User) {
  console.log(process.env.SECRET_JWT)
    return jwt.sign(payload, process.env.SECRET_JWT || "default", { expiresIn: '1d' });
}

  export function verifyToken(token: string) {
    return jwt.verify(token, process.env.SECRET_JWT || "default");
  }
  
