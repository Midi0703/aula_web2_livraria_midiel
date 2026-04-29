import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DRIZZLE } from 'src/db/database/database.constants';
import { autoresTabela } from 'src/db/schemas';
import type { DrizzleDB } from 'src/db/types/drizzleDB';
import { CriarAutorDto } from './autores.dto';

@Injectable()
export class AutoresRepository {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}

  async listarAutores() {
    try {
      return await this.db.select().from(autoresTabela);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar autores');
    }
  }

  async listarAutor(id: number) {
    try {
      const autor = await this.db
        .select()
        .from(autoresTabela)
        .where(eq(autoresTabela.id, id));

      return autor;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar um autor');
    }
  }

  async criarAutor(bodyRequest: CriarAutorDto) {
    try {
      await this.db.insert(autoresTabela).values(bodyRequest);

      const autorCriado = await this.db
        .select()
        .from(autoresTabela)
        .where(eq(autoresTabela.email, bodyRequest.email));

      return autorCriado;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar um autor');
    }
  }
}
