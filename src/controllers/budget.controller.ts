import { Request, Response } from "express";
import useCrud from "../hooks/useCrud";

const fields: any = [
  "client_name",
  "phone",
  "email",
  "whatsapp",
  "instagram",
  "schedule_date",
  "schedule_hour",
  "service_id",
  "status_id",
  "payment",
  "price",
  "created_date",
  "is_from_web",
  "description",
  "gender",
];

export const getAllBudgets = async (req: Request, res: Response) => {
  try {
    const { getAll } = useCrud("budget");

    return res.json(await getAll());
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao buscar orçamentos");
  }
};

export const getBudgetById = async (req: Request, res: Response) => {
  try {
    const { getById } = useCrud("budget");

    const service = await getById(req.params.id);

    if (!service.length)
      return res.json({
        message: "Nenhum orçamento encontrada com o Id solicitado",
      });

    return res.json(service[0]);
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao buscar orçamento");
  }
};

export const createBudget = async (req: Request, res: Response) => {
  try {
    const { create } = useCrud("budget");

    let data: any;

    for (const f of fields) {
      if (!req.body[f]) {
        data = {
          ...data,
          [f]: "",
        };
      } else {
        data = {
          ...data,
          [f]: req.body[f],
        };
      }
    }

    return res.json(await create(data));
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao criar orçamento");
  }
};

export const updateBudget = async (req: Request, res: Response) => {
  try {
    const { update } = useCrud("budget");

    let data: any;

    for (const f of fields) {
      if (!req.body[f]) {
        data = {
          ...data,
          [f]: "",
        };
      } else {
        data = {
          ...data,
          [f]: req.body[f],
        };
      }
    }

    return res.json(await update(req.body.id, data));
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao atualizar orçamento");
  }
};

export const deleteBudget = async (req: Request, res: Response) => {
  try {
    const { deleteById } = useCrud("budget");

    return res.json(await deleteById(req.params.id));
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao excluir orçamento");
  }
};
