import { createConnection } from "typeorm";

export const connectDatabase = async () => {
  try {
    console.log("Tentando conectar ao banco de dados...");
    await createConnection();
    console.log("Conectado ao banco de dados!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados", error);
    throw error;
  }
};
