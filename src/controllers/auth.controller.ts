require("dotenv").config();
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authenticate = async (req: Request, res: Response) => {
  try {
    const { user, password } = req.body;

    if (
      user !== process.env.AUTH_USERNAME ||
      password !== process.env.AUTH_PASSWORD
    ) {
      throw Error("Usuário ou senha inválidos");
    }

    const token = jwt.sign({ user, password }, process.env.SECRET as string, {
      expiresIn: "365d",
    });

    return res.json({ user, password, token });
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao buscar usuário");
  }
};

export const verifyToken = async (req: Request, res: Response) => {
  try {
    const authorization: string = req.headers.authorization!;
    const token = authorization.replace("Bearer ", "");

    const isValid = jwt.verify(token, process.env.SECRET as string);

    return res.json(isValid);
  } catch (error) {
    console.error(error);
    throw Error("Erro ao validar token");
  }
};
