import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CriarUsuarioDto } from './usuarios.dto';
import { string } from 'drizzle-orm/cockroach-core';

@Controller('Usuarios')
export class UsuariosController {
  constructor(private readonly usuarioService: UsuariosService) {}

  @Post('/criar-usuario')
  async CriarUsuario(@Body() bodyrequest: CriarUsuarioDto) {
    return await this.usuarioService.criarUsuario(bodyrequest);
  }

  @Get('/usuarios-por-email/:email')
  async BuscarUsuarioPorEmail(@Param('email') email: string) {
    return await this.usuarioService.buscarUsuarioPorEmail(email);
  }
}
