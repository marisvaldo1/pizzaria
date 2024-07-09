import { DataSource } from "typeorm";
import { Pedido } from "../src/models/Pedido";
import { Pizza } from "../src/models/Pizza";

export const setupTestConnection = async () => {
  const dataSource = new DataSource({
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    entities: [Pedido, Pizza],
    synchronize: true,
    logging: false,
  });
  await dataSource.initialize();
  return dataSource;
};
