import { Router } from "express";
import { CriarUserController } from "../modules/usuarios/useCases/criarUsuario/CriarUserController";
import { GetAllUsersController } from "../modules/usuarios/useCases/obterUsuarios/GetAllUsersController";

const criarUserController = new CriarUserController();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/", criarUserController.handle);
userRoutes.get("/", getAllUsersController.handle);

export { userRoutes };