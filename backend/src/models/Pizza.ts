import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * @swagger
 * components:
 *   schemas:
 *     Pizza:
 *       type: object
 *       required:
 *         - preco
 *         - tempo_preparo
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da pizza
 *         preco:
 *           type: number
 *           description: Preço da pizza
 *         tempo_preparo:
 *           type: integer
 *           description: Tempo de preparo da pizza em minutos
 *       example:
 *         preco: 25.5
 *         tempo_preparo: 20
 */
@Entity("pizzas")
export class Pizza {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("decimal")
  preco!: number;

  @Column("int")
  tempo_preparo!: number;
}
