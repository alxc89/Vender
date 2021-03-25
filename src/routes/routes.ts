import { Router } from "express";
import { Prodrouter } from "../routes/prodRoutes/prodRoutes";
import { CadRouter } from "./cadRoutes/cadRoutes";
const router = Router();

router.use(CadRouter);
router.use(Prodrouter);

export { router };
