import { AppDataSource } from "../config/data-source";

const useCrud = (tableName: string) => {
  const getAll = async () => {
    try {
      return await AppDataSource.query(`SELECT * FROM ${tableName}`);
    } catch (error) {
      console.error(error);
      throw Error("Erro ao buscar dados");
    }
  };

  const getById = async (id: number | string) => {
    try {
      return await AppDataSource.query(
        `SELECT * FROM ${tableName} WHERE id = ${id}`
      );
    } catch (error) {
      console.error(error);
      throw Error("Erro ao buscar dado");
    }
  };

  const deleteById = async (id: number | string) => {
    try {
      return await AppDataSource.query(
        `DELETE FROM ${tableName} WHERE id = ${id}`
      );
    } catch (error) {
      console.error(error);
      throw Error("Erro ao deletar dado");
    }
  };

  const create = async <Data>(
    data: Data & {
      [key: string]: string | number;
    }
  ) => {
    try {
      const keyColumns = Object.keys(data);
      const joinColumns = keyColumns.join(", ");
      const values = [];

      for (const col of keyColumns) {
        values.push(`'${data[col]}'`);
      }

      const joinValues = values.join(", ");

      return await AppDataSource.query(
        `INSERT INTO ${tableName} (${joinColumns}) values(${joinValues})`
      );
    } catch (error) {
      console.error(error);
      throw Error("Erro ao criar dado");
    }
  };

  const update = async <Data>(
    id: number | string,
    data: Data & {
      [key: string]: string | number;
    }
  ) => {
    try {
      const keyColumns = Object.keys(data);
      const values = [];

      for (const col of keyColumns) {
        values.push(`${col} = '${data[col]}'`);
      }

      const joinValues = values.join(", ");

      return await AppDataSource.query(
        `UPDATE ${tableName} SET ${joinValues} WHERE id = ${id}`
      );
    } catch (error) {
      console.error(error);
      throw Error("Erro ao atualizar dado");
    }
  };

  const unlinkFromTable = async (tableName: string, column: string) => {
    return await AppDataSource.query(`UPDATE ${tableName} SET ${column} = ''`);
  };

  return {
    getAll,
    getById,
    deleteById,
    create,
    update,
    unlinkFromTable,
  };
};

export default useCrud;
