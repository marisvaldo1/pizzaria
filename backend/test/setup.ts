import { createConnection, getConnectionOptions, getConnection } from "typeorm";

export const setupTestConnection = async () => {
  let connection;
  try {
    connection = getConnection();
    if (connection.isConnected) {
      await connection.close();
    }
  } catch (error) {
    // Conexão não existe, então criaremos uma nova
  }

  const connectionOptions = await getConnectionOptions();
  return createConnection({
    ...connectionOptions,
    name: "default",
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
    dropSchema: true,
    entities: ["src/models/**/*.ts"],
  } as any);
};
