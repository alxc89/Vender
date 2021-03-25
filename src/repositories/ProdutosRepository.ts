import "reflect-metadata";
import { EntityRepository, Repository } from "typeorm";
import { Produtos } from "../models/Produtos";

@EntityRepository(Produtos)
class ProdutosRepository extends Repository<Produtos> {}

export { ProdutosRepository };
