import { Router } from "express";
import { CadastrosController } from "../../controllers/CadastrosController";

const CadRouter = Router();

const cadastrosController = new CadastrosController();

//Cadastros
CadRouter.post("/cadastros", cadastrosController.create);
CadRouter.get("/cadastros", cadastrosController.findAll);
CadRouter.get("/cadastros/:nome", cadastrosController.findName);

CadRouter.put("/cadastros/:id", cadastrosController.update);
CadRouter.delete("/cadastros/:id", cadastrosController.delete);

export { CadRouter };
