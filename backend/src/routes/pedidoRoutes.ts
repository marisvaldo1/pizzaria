import { Router } from "express";
import { DataSource } from "typeorm";
import { PedidoController } from "../controllers/PedidoController";

const router = Router();

export default (dataSource: DataSource) => {
  console.log("Inicializando rotas de pedido...");
  const pedidoController = new PedidoController(dataSource);

  router.post("/", (req, res) => pedidoController.criarPedido(req, res));
  router.get("/", (req, res) => pedidoController.listarPedidos(req, res));
  router.get("/:id", (req, res) => pedidoController.buscarPedido(req, res));
  router.delete("/:id", (req, res) => pedidoController.excluirPedido(req, res));

  return router;
};
