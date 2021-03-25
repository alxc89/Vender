import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("cadastros")
class Cadastros {
  @PrimaryColumn()
  readonly id: String;

  @Column()
  nomeFantasia: String;

  @Column()
  razaoSocial: String;

  @Column()
  tipoDePessoa: String;

  @Column()
  nome: String;

  @Column()
  CNPJ: String;

  @Column()
  CPF: String;

  @Column()
  email: String;

  @Column()
  celular: String;

  @Column()
  cliente: boolean;

  @Column()
  fornecedor: boolean;

  @Column()
  CEP: String;

  @Column()
  endereco: String;

  @Column()
  complemento: String;

  @Column()
  numero: Number;

  @Column()
  cidade: String;

  @Column()
  bairro: String;

  @Column()
  UF: String;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Cadastros };
