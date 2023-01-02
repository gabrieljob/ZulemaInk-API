import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { Budget } from "../models/budget.entity";

const Config: DataSourceOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "I@4vq5qp",
  database: "zulemaink_refactor",
  entities: [Budget],
  migrations: [__dirname + "/../migrations/*{.ts,.js}"],
  synchronize: false,
  migrationsRun: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export const AppDataSource: DataSource = new DataSource(Config);
