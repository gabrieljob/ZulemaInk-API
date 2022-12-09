import express from "express";
import * as BudgetController from "../controllers/budget.controller";
const routes = express.Router();

routes.get("/", BudgetController.getAllBudgets);
routes.get("/:id", BudgetController.getBudgetById);
routes.post("/", BudgetController.createBudget);
routes.put("/", BudgetController.updateBudget);
routes.delete("/:id", BudgetController.deleteBudget);

export default routes;
