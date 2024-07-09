import { Request, Response } from "express";
import { DataSource } from "typeorm";
import { PedidoService } from "../services/PedidoService";

export class PedidoController {
  private pedidoService: PedidoService;

  constructor(dataSource: DataSource) {
    this.pedidoService = new PedidoService(dataSource);
  }

  async criarPedido(req: Request, res: Response): Promise<Response> {
    const { tamanho, sabor, personalizacao, valor_total, tempo_preparo } = req.body;
    try {
      const pedido = await this.pedidoService.criarPedido({
        tamanho,
        sabor,
        personalizacao,
        valor_total,
        tempo_preparo,
      });
      return res.status(201).json(pedido);
    } catch (error) {
      return res.status(400).json({ message: "Erro ao criar pedido", error });
    }
  }

  async listarPedidos(req: Request, res: Response): Promise<Response> {
    try {
      const pedidos = await this.pedidoService.listarPedidos();
      return res.status(200).json(pedidos);
    } catch (error) {
      return res.status(400).json({ message: "Erro ao listar pedidos", error });
    }
  }

  async buscarPedido(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const pedido = await this.pedidoService.buscarPedido(Number(id));
      return pedido ? res.status(200).json(pedido) : res.status(404).json({ message: "Pedido não encontrado" });
    } catch (error) {
      return res.status(400).json({ message: "Erro ao buscar pedido", error });
    }
  }

  async excluirPedido(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      await this.pedidoService.excluirPedido(Number(id));
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ message: "Erro ao excluir pedido", error });
    }
  }
}
