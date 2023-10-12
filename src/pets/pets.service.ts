import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePetDto) {
    const registerPet = await this.prisma.pets.create({
      data: {
        usuario_id: data.usuario_id,
        nome: data.nome,
        raca: data.raca,
        tipo: data.tipo,
        idade: data.idade,
        porte: data.porte,
        sexo: data.sexo,
        imagem: data.imagem,
      },
    });
    return {
      success: true,
      message: 'Pet registrado com sucesso.',
      registerPet,
    };
  }

  async findAll() {
    const allPets = await this.prisma.pets.findMany();
    return {
      data: allPets,
    };
  }

  async findAllById(id: string) {
    const allPets = await this.prisma.pets.findMany({
      where: {
        id: parseInt(id),
      },
    });
    return {
      data: allPets,
    };
  }

  async findOne(id: string) {
    const pet = await this.prisma.pets.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return pet;
  }

  async update(id: string, data: UpdatePetDto) {
    const updatedPet = await this.prisma.pets.update({
      where: {
        id: parseInt(id),
      },
      data: {
        disponivel: data.disponivel,
      },
    });
    return {
      success: true,
      message: 'Disponibilidade do Pet atualizada com sucesso.',
      updatedPet,
    };
  }

  async remove(id: string) {
    const deletedPet = await this.prisma.pets.delete({
      where: {
        id: parseInt(id),
      },
    });
    return {
      success: true,
      message: 'Pet deletado com sucesso.',
      deletedPet,
    };
  }
}
