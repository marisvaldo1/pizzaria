import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreatePedido1620278910124 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pedido',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'tamanho',
            type: 'varchar',
          },
          {
            name: 'sabor',
            type: 'varchar',
          },
          {
            name: 'personalizacao',
            type: 'varchar',
          },
          {
            name: 'valor_total',
            type: 'float',
          },
          {
            name: 'tempo_preparo',
            type: 'int',
          },
          {
            name: 'pizzaId',
            type: 'int',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'pedido',
      new TableForeignKey({
        columnNames: ['pizzaId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pizza',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pedido');
  }
}
