import {
  BadRequestException,
  Body,
  Injectable,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';
import { AutoresRepository } from './autores.repository';

@Injectable()
export class AutoresService {
  constructor(private readonly autoresRepository: AutoresRepository) {}

  async listarAutores() {
    return await this.autoresRepository.listarAutores();
  }

  async listarAutor(id: number) {
    const autorEncontrado = await this.autoresRepository.listarAutor(id);

    if (autorEncontrado.length === 0) {
      throw new NotFoundException(`Autor com id ${id} não encontrado`);
    }
    return autorEncontrado;
  }

  async criarAutor(bodyRequest: CriarAutorDto) {
    return this.autoresRepository.criarAutor(bodyRequest);
  }

  async atualizarAutor(idAutor: number, bodyRequest: AtualizarAutorDto) {
    await this.listarAutor(idAutor);

    return this.autoresRepository.atualizarAutor(idAutor, bodyRequest);
  }

  async deletarAutor(idAutor: number) {
    await this.listarAutor(idAutor);

    return this.autoresRepository.deletarAutor(idAutor);
  }

  async inativarAutor(idAutor: number) {
    await this.inativarAutor(idAutor);

    return this.autoresRepository.inativarAutor(idAutor);
  }
}
