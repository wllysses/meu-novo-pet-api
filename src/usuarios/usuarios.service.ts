import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/infra/database/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { AuthUsuarioDto } from './dto/auth-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUsuarioDto) {
    const emailExists = await this.prisma.usuarios.findUnique({
      where: {
        email: data.email,
      },
    });

    if (emailExists) {
      throw new Error('E-mail já cadastrado.');
    }

    const hashPassword = await bcrypt.hash(data.senha, 10);

    if (data.senha !== data.confirmar_senha) {
      throw new Error('As senhas precisam ser iguais.');
    }

    await this.prisma.usuarios.create({
      data: {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        cidade: data.cidade,
        senha: hashPassword,
        confirmar_senha: hashPassword,
      },
    });

    return {
      success: true,
      message: 'Usuário cadastrado com sucesso',
    };
  }

  async auth(data: AuthUsuarioDto) {
    const userExists = await this.prisma.usuarios.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!userExists) {
      throw new Error('E-mail ou senha incorretos.');
    }

    const passwordExists = await bcrypt.compare(data.senha, userExists.senha);

    if (!passwordExists) {
      throw new Error('E-mail ou senha incorretos.');
    }

    const token = jwt.sign(
      { nome: userExists.nome, email: userExists.email },
      process.env.JWT_SECRET_KEY,
    );
    return {
      success: true,
      token,
      data: {
        nome: userExists.nome,
        id: userExists.id,
      },
    };
  }
}
