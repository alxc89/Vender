import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Produtos1615425293461 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("produtos");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "produtos",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "nome",
            type: "varchar(110)",
            isNullable: false,
          },
          {
            name: "referencia",
            type: "varchar(60)",
            isNullable: true,
          },
          {
            name: "precoCompra",
            type: "double precision",
          },
          {
            name: "precoVenda",
            type: "double precision",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }
}
