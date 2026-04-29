import {
  BadRequestException,
  Body,
  Injectable,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';
import { AutoresRepository } from './autores.repository';

let autores = [
  {
    id: 1,
    nome: 'João da Silva',
    email: 'joao.silva@gmail.com',
  },
  {
    id: 2,
    nome: 'Maria Oliveira',
    email: 'maria.oliveira@gmail.com',
  },
  {
    id: 3,
    nome: 'Pedro Santos',
    email: 'pedro.santos@gmail.com',
  },
];

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

  /*listarAutores() {
    if (!autores) {
      ('Nenhum autor encontrado.');
    }
    return autores;
  } */

  /*listarAutor(id: number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);

    if (!autorEncontrado) {
      throw new NotFoundException('Autor não encontrado.');
    }
    return autorEncontrado;
  }

  criarAutor(bodyRequest: CriarAutorDto) {
    if (!bodyRequest.nome || !bodyRequest.email) {
      return 'Nome e email são obrigatórios!';
    }
    autores.push({
      id: autores.length + 1,
      nome: bodyRequest.nome,
      email: bodyRequest.email,
    });

    return autores;
  }

  atualizarAutor(idAutor: number, bodyRequest: AtualizarAutorDto) {
    const autorEncontrado = this.listarAutor(idAutor);

    if (!bodyRequest.nome && !bodyRequest.email) {
      throw new BadRequestException('Nome e email são obrigatórios.');
    }

    if (bodyRequest.nome) {
      autorEncontrado.nome = bodyRequest.nome;
    }
    if (bodyRequest.email) {
      autorEncontrado.email = bodyRequest.email;
    }

    return autorEncontrado;
  }

  deletarAutor(idAutor: number) {
    this.listarAutor(idAutor);

    autores = autores.filter((autor) => autor.id !== idAutor);

    return autores;
  }*/
}
