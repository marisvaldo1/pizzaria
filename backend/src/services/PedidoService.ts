import { Repository, DataSource } from "typeorm";
import { Pedido } from "../models/Pedido";

interface PedidoData {
  tamanho: string;
  sabor: string;
  personalizacao?: string;
  valor_total: number;
  tempo_preparo: number;
}

export class PedidoService {
  private pedidoRepository: Repository<Pedido>;

  constructor(dataSource: DataSource) {
    if (!dataSource.isInitialized) {
      console.error("DataSource não inicializado no PedidoService.");
      throw new Error("DataSource não inicializado.");
    }
    this.pedidoRepository = dataSource.getRepository(Pedido);
  }

  async criarPedido(data: PedidoData): Promise<Pedido> {
    const pedido = this.pedidoRepository.create(data);
    await this.pedidoRepository.save(pedido);
    return pedido;
  }

  async listarPedidos(): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  async buscarPedido(id: number): Promise<Pedido | null> {
    return this.pedidoRepository.findOneBy({ id });
  }

  async excluirPedido(id: number): Promise<void> {
    await this.pedidoRepository.delete(id);
  }
}
