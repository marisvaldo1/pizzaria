import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("pedidos")
export class Pedido {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  tamanho!: string;

  @Column("text")
  sabor!: string;

  @Column("text", { nullable: true })
  personalizacao?: string; // Propriedade opcional

  @Column("decimal")
  valor_total!: number;

  @Column("int")
  tempo_preparo!: number;
}
