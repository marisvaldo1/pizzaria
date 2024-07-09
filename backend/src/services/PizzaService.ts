import { Repository } from "typeorm";
import { Pizza } from "../models/Pizza";
import { AppDataSource } from "../data-source";

export class PizzaService {
  private pizzaRepository: Repository<Pizza>;

  constructor() {
    if (!AppDataSource.isInitialized) {
      throw new Error("DataSource não inicializado");
    }
    this.pizzaRepository = AppDataSource.getRepository(Pizza);
  }

  async criarPizza(data: Partial<Pizza>): Promise<Pizza> {
    const pizza = this.pizzaRepository.create(data);
    return this.pizzaRepository.save(pizza);
  }

  async listarPizzas(): Promise<Pizza[]> {
    return this.pizzaRepository.find();
  }

  async buscarPizza(id: number): Promise<Pizza | null> {
    return this.pizzaRepository.findOneBy({ id });
  }

  async excluirPizza(id: number): Promise<void> {
    await this.pizzaRepository.delete(id);
  }
}
