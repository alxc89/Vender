import { EntityRepository, Repository } from "typeorm";
import { Cadastros } from "../models/Cadastros";

@EntityRepository(Cadastros)
class CadastrosRepository extends Repository<Cadastros> {}

export { CadastrosRepository };
