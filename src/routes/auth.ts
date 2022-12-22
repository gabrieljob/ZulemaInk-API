import express from "express";
import * as AuthController from "../controllers/auth.controller";
const routes = express.Router();

routes.post("/login", AuthController.authenticate);
routes.get("/verify", AuthController.verifyToken);

export default routes;
