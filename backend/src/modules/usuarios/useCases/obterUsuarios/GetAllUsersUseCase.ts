import { Usuario } from "@prisma/client";
import { prismaClie } from "../../../../cliePrisma/clientprisma";

export class GetAllUsersUseCase {
  async execute(): Promise<Usuario[]> {
    const users = await prismaClie.usuario.findMany();

    return users;
  }
}