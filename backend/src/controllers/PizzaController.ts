import { Request, Response } from "express";
import { PizzaService } from "../services/PizzaService";

export class PizzaController {
  private pizzaService: PizzaService;

  constructor() {
    this.pizzaService = new PizzaService();
  }

  async criarPizza(req: Request, res: Response): Promise<void> {
    const pizza = await this.pizzaService.criarPizza(req.body);
    res.status(201).json(pizza);
  }

  async listarPizzas(req: Request, res: Response): Promise<void> {
    const pizzas = await this.pizzaService.listarPizzas();
    res.json(pizzas);
  }

  async buscarPizza(req: Request, res: Response): Promise<void> {
    const pizza = await this.pizzaService.buscarPizza(parseInt(req.params.id));
    if (pizza) {
      res.json(pizza);
    } else {
      res.status(404).send("Pizza não encontrada");
    }
  }

  async excluirPizza(req: Request, res: Response): Promise<void> {
    await this.pizzaService.excluirPizza(parseInt(req.params.id));
    res.status(200).send("Pizza excluída com sucesso");
  }
}
