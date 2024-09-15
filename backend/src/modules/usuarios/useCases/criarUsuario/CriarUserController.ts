import { Request, Response } from "express";
import { CriarUserUseCase } from "./CriarUserUseCase";

export class CriarUserController {
  async handle(req: Request, res: Response) {
    const { nome, email } = req.body;

    const criarUserUseCase = new CriarUserUseCase();

    const result = await criarUserUseCase.execute({ nome, email });

    return res.status(201).json(result);
  }
}