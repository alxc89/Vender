import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Produtos1615340001136 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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
            type: "real",
          },
          {
            name: "precoVenda",
            type: "real",
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("produtos");
  }
}
