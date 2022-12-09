import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import useCrud from "../hooks/useCrud";
import { StatusTypes } from "../types/status.types";

export const getAllSituations = async (req: Request, res: Response) => {
  try {
    const { getAll } = useCrud("status");

    return res.json(await getAll());
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao buscar situações");
  }
};

export const getSituationById = async (req: Request, res: Response) => {
  try {
    const { getById } = useCrud("status");

    const status = await getById(req.params.id);

    if (!status.length)
      return res.json({
        message: "Nenhuma situação encontrada com o Id solicitado",
      });

    return res.json(status[0]);
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao buscar situação");
  }
};

export const createSituation = async (req: Request, res: Response) => {
  try {
    const { create } = useCrud("status");

    return res.json(
      await create<StatusTypes>({
        label: req.body.label,
        background_color: req.body.background_color,
        color: req.body.color,
      })
    );
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao criar situações");
  }
};

export const updateSituation = async (req: Request, res: Response) => {
  try {
    const { update } = useCrud("status");

    return res.json(
      await update<StatusTypes>(req.body.id, {
        label: req.body.label,
        background_color: req.body.background_color,
        color: req.body.color,
      })
    );
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao atualizar situação");
  }
};

export const deleteSituation = async (req: Request, res: Response) => {
  try {
    const { deleteById, unlinkFromTable } = useCrud("status");

    await unlinkFromTable("budget", "status_id");

    return res.json(await deleteById(req.params.id));
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao excluir situação");
  }
};
