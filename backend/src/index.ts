import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import pizzaRoutes from "./routes/pizzaRoutes";
import pedidoRoutes from "./routes/pedidoRoutes";
import { setupSwagger } from "./swagger";

const app = express();

app.use(express.json());

setupSwagger(app);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    console.log("Iniciando conexão com o banco de dados...");
    await AppDataSource.initialize();
    console.log("Conexão com o banco de dados estabelecida.");

    app.use((req, res, next) => {
      if (!AppDataSource.isInitialized) {
        console.error("DataSource não inicializado.");
        return res.status(500).send("Erro ao conectar ao banco de dados.");
      }
      next();
    });

    app.use("/pizzas", pizzaRoutes);
    app.use("/pedidos", pedidoRoutes);

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1); // Encerra o processo em caso de erro na conexão
  }
};

startServer();
