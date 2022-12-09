import { Request, Response } from "express";
import useCrud from "../hooks/useCrud";
import { ServiceTypes } from "../types/service.types";

export const getAllServices = async (req: Request, res: Response) => {
  try {
    const { getAll } = useCrud("service");

    return res.json(await getAll());
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao buscar serviço");
  }
};

export const getServiceById = async (req: Request, res: Response) => {
  try {
    const { getById } = useCrud("service");

    const service = await getById(req.params.id);

    if (!service.length)
      return res.json({
        message: "Nenhuma service encontrada com o Id solicitado",
      });

    return res.json(service[0]);
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao buscar serviço");
  }
};

export const createService = async (req: Request, res: Response) => {
  try {
    const { create } = useCrud("service");

    return res.json(await create<ServiceTypes>({ label: req.body.label }));
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao criar serviço");
  }
};

export const updateService = async (req: Request, res: Response) => {
  console.log("HEY", req.body);
  try {
    const { update } = useCrud("service");

    return res.json(
      await update<ServiceTypes>(req.body.id, {
        label: req.body.label,
      })
    );
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao atualizar serviço");
  }
};

export const deleteService = async (req: Request, res: Response) => {
  try {
    const { deleteById, unlinkFromTable } = useCrud("service");

    await unlinkFromTable("budget", "service_id");

    return res.json(await deleteById(req.params.id));
  } catch (error: any) {
    console.error(error);
    throw Error("Erro ao excluir serviço");
  }
};
