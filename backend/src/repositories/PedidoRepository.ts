import { EntityRepository, Repository } from "typeorm";
import { Pedido } from "../models/Pedido";

@EntityRepository(Pedido)
export class PedidoRepository extends Repository<Pedido> {}

