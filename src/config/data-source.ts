require("dotenv").config();
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { Budget } from "../models/budget.entity";

const Config: DataSourceOptions = {
  type: "mysql",
  host: process.env.SERVER_HOST,
  port: parseInt(process.env.SERVER_PORT as string),
  username: process.env.SERVER_USERNAME,
  password: process.env.SERVER_PASSWORD,
  database: process.env.SERVER_DATABASE,
  entities: [Budget],
  migrations: [__dirname + "/../migrations/*{.ts,.js}"],
  synchronize: false,
  migrationsRun: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export const AppDataSource: DataSource = new DataSource(Config);
