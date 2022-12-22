require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization: string = req.headers.authorization!;
    const token = authorization.replace("Bearer ", "");

    const isValid = jwt.verify(token, process.env.SECRET as string);
    if (!isValid)
      return res.status(500).json({ error: "Erro ao validar token" });

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao validar token" });
  }
};
