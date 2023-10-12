import { Controller, Post, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { AuthUsuarioDto } from './dto/auth-usuario.dto';

@Controller('api/v1')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('usuarios')
  async create(@Body() data: CreateUsuarioDto) {
    return await this.usuariosService.create(data);
  }

  @Post('auth')
  async auth(@Body() data: AuthUsuarioDto) {
    return this.usuariosService.auth(data);
  }
}
