import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Produtos } from "../models/Produtos";
import { exitsOrNot } from "../utils/utils";

class ProdutosController {
  // private produtosRepository = getRepository(Produtos);

  async create(request: Request, response: Response) {
    const { nome, referencia, precoCompra, precoVenda } = request.body;
    const produtosRepository = getRepository(Produtos);

    try {
      const produto = produtosRepository.create({
        nome,
        referencia,
        precoCompra,
        precoVenda,
      });

      await produtosRepository.save(produto);

      response.status(201).json(produto);
    } catch (error) {
      response.json(error);
    }
  }

  async findAll(request: Request, response: Response) {
    const produtosRepository = getRepository(Produtos);

    try {
      const findAll = await produtosRepository.find();

      return response.status(200).json(findAll);
    } catch (error) {
      response.json(error);
    }
  }

  async findName(request: Request, response: Response) {
    const { nome } = request.params;
    const produtosRepository = getRepository(Produtos);

    try {
      const produto = await produtosRepository.find({
        where: `"nome" ILIKE '%${nome}%'`,
      });

      return response.json(produto);
    } catch (error) {
      return response.json(error);
    }
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const produtosRepository = getRepository(Produtos);

    try {
      const produtoAlterado = await produtosRepository.update(id, request.body);
      exitsOrNot(!produtoAlterado, "Não encontrado", 404, response);

      return response.json(produtoAlterado);
    } catch (error) {
      response.json(error);
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const produtosRepository = getRepository(Produtos);

    try {
      await produtosRepository.delete(id);

      return response.json("Produto apagado");
    } catch (error) {
      response.json(error);
    }
  }
}

export { ProdutosController };
