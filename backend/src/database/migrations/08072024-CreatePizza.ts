import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePizza1620278910123 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pizza',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'preco',
            type: 'float',
          },
          {
            name: 'tempo_preparo',
            type: 'int',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pizza');
  }
}
