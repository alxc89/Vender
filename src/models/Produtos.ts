import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("produtos")
class Produtos {
  @PrimaryGeneratedColumn("increment")
  readonly id: Number;

  @Column("varchar")
  nome: String;

  @Column("varchar")
  referencia: String;

  @Column("double precision")
  precoCompra: Number;

  @Column("double precision")
  precoVenda: String;

  @CreateDateColumn()
  created_at: Date;
}

export { Produtos };
