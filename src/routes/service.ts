import express from "express";
import * as ServiceController from "../controllers/service.controller";
const routes = express.Router();

routes.get("/", ServiceController.getAllServices);
routes.get("/:id", ServiceController.getServiceById);
routes.post("/", ServiceController.createService);
routes.put("/", ServiceController.updateService);
routes.delete("/:id", ServiceController.deleteService);

export default routes;
