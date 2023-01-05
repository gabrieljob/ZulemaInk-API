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
      return console.error("Usuário ou senha inválidos");
    }

    const token = jwt.sign({ user, password }, process.env.SECRET as string, {
      expiresIn: "1d",
    });

    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    return res.json({ user, password, token });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: "Usuário ou senha inválidos" });
  }
};

export const verifyToken = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization!.split(" ")[1];
    const isValid = jwt.verify(token, process.env.SECRET as string);

    return res.json(isValid);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao validar token" });
  }
};
