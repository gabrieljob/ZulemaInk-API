require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.noTken) {
    return next();
  }

  const token = req.headers.authorization!.split(" ");

  const isValid = jwt.decode(token[1]);

  if (isValid) {
    return next();
  }

  if (!isValid) return res.status(500).json({ error: "Erro ao validar token" });

  next();
};
