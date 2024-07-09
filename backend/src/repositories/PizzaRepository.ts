import { EntityRepository, Repository } from "typeorm";
import { Pizza } from "../models/Pizza";

@EntityRepository(Pizza)
export class PizzaRepository extends Repository<Pizza> {}

