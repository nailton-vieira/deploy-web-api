import { Router } from "express";


import { userRoutes } from "./usuario.routes";

const routes = Router();

routes.use("/usuarios", userRoutes);


export { routes };