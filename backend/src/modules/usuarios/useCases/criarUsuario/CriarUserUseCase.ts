import { Usuario } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prismaClie } from "../../../../cliePrisma/clientprisma";
import { CriarUserDto } from "../../dtos/CriarUserDto";

export class CriarUserUseCase {
  async execute({ nome, email }: CriarUserDto): Promise<Usuario> {
    // Verificar se o usuário já existe
    const userAlreadyExists = await prismaClie.usuario.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    // Criar o usuário
    const user = await prismaClie.usuario.create({
      data: {
        nome,
        email,
      },
    });

    return user;
  }
}