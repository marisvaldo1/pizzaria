import { Router } from "express";
import { PizzaController } from "../controllers/PizzaController";

const router = Router();
const pizzaController = new PizzaController();

/**
 * @swagger
 * tags:
 *   name: Pizzas
 *   description: API para gerenciar pizzas
 */

/**
 * @swagger
 * /pizzas:
 *   get:
 *     summary: Retorna a lista de pizzas
 *     tags: [Pizzas]
 *     responses:
 *       200:
 *         description: Lista de pizzas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pizza'
 */
router.get("/", (req, res) => pizzaController.listarPizzas(req, res));

/**
 * @swagger
 * /pizzas:
 *   post:
 *     summary: Cria uma nova pizza
 *     tags: [Pizzas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pizza'
 *     responses:
 *       201:
 *         description: Pizza criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pizza'
 */
router.post("/", (req, res) => pizzaController.criarPizza(req, res));

/**
 * @swagger
 * /pizzas/{id}:
 *   get:
 *     summary: Retorna uma pizza específica
 *     tags: [Pizzas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da pizza
 *     responses:
 *       200:
 *         description: Detalhes da pizza
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pizza'
 *       404:
 *         description: Pizza não encontrada
 */
router.get("/:id", (req, res) => pizzaController.buscarPizza(req, res));

/**
 * @swagger
 * /pizzas/{id}:
 *   delete:
 *     summary: Exclui uma pizza específica
 *     tags: [Pizzas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da pizza
 *     responses:
 *       200:
 *         description: Pizza excluída com sucesso
 *       404:
 *         description: Pizza não encontrada
 */
router.delete("/:id", (req, res) => pizzaController.excluirPizza(req, res));

export default router;
