import { expect } from "chai";
import { describe, it, before } from "mocha";
import { PedidoService } from "../src/services/PedidoService";
import { setupTestConnection } from "./setupTestConnection";
import { DataSource } from "typeorm";

let dataSource: DataSource;

describe("PedidoService", () => {
  before(async () => {
    dataSource = await setupTestConnection();
  });

  it("deve criar um pedido", async () => {
    const pedidoService = new PedidoService(dataSource);
    const pedido = await pedidoService.criarPedido({
      tamanho: "Grande",
      sabor: "Calabresa",
      personalizacao: "extraBacon",
      valor_total: 40.0,
      tempo_preparo: 20,
    });
    expect(pedido).to.have.property("id");
    expect(pedido.valor_total).to.equal(40.0);
    expect(pedido.tempo_preparo).to.equal(20);
  });
});
