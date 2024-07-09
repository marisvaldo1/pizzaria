import { expect } from "chai";
import { describe, it, before } from "mocha";
import { PizzaService } from "../src/services/PizzaService";
import { AppDataSource } from "../src/data-source";
import { Pizza } from "../src/models/Pizza";

before(async () => {
  await AppDataSource.initialize();
});

describe("PizzaService", () => {
  it("deve criar uma pizza", async () => {
    const pizzaService = new PizzaService();
    const pizza = await pizzaService.criarPizza({ preco: 20.0, tempo_preparo: 15 });
    expect(pizza).to.have.property("id");
    expect(pizza.preco).to.equal(20.0);
    expect(pizza.tempo_preparo).to.equal(15);
  });

  // Adicione mais testes conforme necessário
});
