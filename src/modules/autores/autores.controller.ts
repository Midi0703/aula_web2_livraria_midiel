import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AutoresService } from './autores.service';
import { AtualizarAutorDto, CriarAutorDto } from './autores.dto';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Get('/Listar-autores')
  async listarAutores() {
    return await this.autoresService.listarAutores();
  }

  @Get('/Listar-autor/:id')
  async listarAutor(@Param('id', ParseIntPipe) id: number) {
    return await this.autoresService.listarAutor(id);
  }

  @Post('/criar-autor')
  criarAutor(@Body() bodyRequest: CriarAutorDto) {
    return this.autoresService.criarAutor(bodyRequest);
  }

  @Put('/atualizar-autor/:id')
  atualizarAutor(
    @Param('id', ParseIntPipe) idAutor: number,
    @Body() bodyRequest: AtualizarAutorDto,
  ) {
    return this.autoresService.atualizarAutor(idAutor, bodyRequest);
  }

  @Delete('deletar-autor/:id')
  deletarAutor(@Param('id', ParseIntPipe) idAutor: number) {
    return this.autoresService.deletarAutor(idAutor);
  }
}
