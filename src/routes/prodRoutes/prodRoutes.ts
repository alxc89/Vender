import { Router } from "express";
import { ProdutosController } from "../../controllers/ProdutosController";
const Prodrouter = Router();

const produtosController = new ProdutosController();

Prodrouter.post("/produtos", produtosController.create);
Prodrouter.get("/produtos", produtosController.findAll);
Prodrouter.get("/produtos/:nome", produtosController.findName);

Prodrouter.put("/produtos/:id", produtosController.update);
Prodrouter.delete("/produtos/:id", produtosController.delete);

export { Prodrouter };
