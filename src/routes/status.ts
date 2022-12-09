import express from "express";
import * as SituationController from "../controllers/status.controller";
const routes = express.Router();

routes.get("/", SituationController.getAllSituations);
routes.get("/:id", SituationController.getSituationById);
routes.post("/", SituationController.createSituation);
routes.put("/", SituationController.updateSituation);
routes.delete("/:id", SituationController.deleteSituation);

export default routes;
