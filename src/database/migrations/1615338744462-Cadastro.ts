import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Cadastros1615251484386 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cadastro",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "nomeFantasia",
            type: "varchar(110)",
          },
          {
            name: "razaoSocial",
            type: "varchar(110)",
          },
          {
            name: "tipoDePessoa",
            type: "varchar(50)",
          },
          {
            name: "nome",
            type: "varchar(110)",
          },
          {
            name: "CNPJ",
            type: "varchar(14)",
          },
          {
            name: "CPF",
            type: "varchar(11)",
          },
          {
            name: "email",
            type: "varchar(110)",
          },
          {
            name: "celular",
            type: "varchar(11)",
          },
          {
            name: "cliente",
            type: "boolean",
          },
          {
            name: "fornecedor",
            type: "boolean",
          },
          {
            name: "CEP",
            type: "varchar(8)",
          },
          {
            name: "endereco",
            type: "varchar(60)",
          },
          {
            name: "complemento",
            type: "varchar(50)",
          },
          {
            name: "numero",
            type: "int",
          },
          {
            name: "cidade",
            type: "varchar(60)",
          },
          {
            name: "bairro",
            type: "varchar(60)",
          },
          {
            name: "UF",
            type: "varchar(2)",
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
    await queryRunner.dropTable("cadastro");
  }
}
