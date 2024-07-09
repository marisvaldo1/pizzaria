import "reflect-metadata";
import { DataSource } from "typeorm";
import { Pizza } from "./models/Pizza";
import { Pedido } from "./models/Pedido";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Pizza, Pedido],
  migrations: ["src/migration/**/*.ts"],
  subscribers: [],
});
