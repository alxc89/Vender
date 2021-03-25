import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Cadastros } from "../models/Cadastros";

class CadastrosController {
  async create(request: Request, response: Response) {
    const {
      nomeFantasia,
      razaoSocial,
      tipoDePessoa,
      nome,
      CNPJ,
      CPF,
      email,
      celular,
      cliente,
      fornecedor,
      CEP,
      endereco,
      complemento,
      numero,
      cidade,
      bairro,
      UF,
    } = request.body;

    const cadastrosRepository = getRepository(Cadastros);

    const cadastro = cadastrosRepository.create({
      nomeFantasia,
      razaoSocial,
      tipoDePessoa,
      nome,
      CNPJ,
      CPF,
      email,
      celular,
      cliente,
      fornecedor,
      CEP,
      endereco,
      complemento,
      numero,
      cidade,
      bairro,
      UF,
    });

    await cadastrosRepository.save(cadastro);
    return response.status(201).json(cadastro);
  }

  async findAll(request: Request, response: Response) {
    try {
      const cadastrosRepository = getRepository(Cadastros);
      const cadastro = await cadastrosRepository.find();

      return response.json(cadastro);
    } catch (error) {
      response.json(error);
    }
  }

  async findName(request: Request, response: Response) {
    const { nome } = request.params;
    const cadastrosRepository = getRepository(Cadastros);

    try {
      const cadastro = await cadastrosRepository.find({
        where: `"nome" ILIKE '%${nome}%'`,
      });

      if (!cadastro) {
        response.status(404).json("Não encontrado");
      }

      return response.status(200).json(cadastro);
    } catch (error) {
      response.json(error);
    }
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const cadastrosRepository = getRepository(Cadastros);

    try {
      await cadastrosRepository.update(id, request.body);
      const cadastroAlterado = await cadastrosRepository.findOne(id);

      return response.json(cadastroAlterado);
    } catch (error) {
      response.json(error);
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const cadastrosRepository = getRepository(Cadastros);

    try {
      await cadastrosRepository.delete(id);

      return response.json("Apagado");
    } catch (error) {
      return response.json(error);
    }
  }
}

export { CadastrosController };
