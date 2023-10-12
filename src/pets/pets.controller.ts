import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('api/v1')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post('pets')
  async create(@Body() data: CreatePetDto) {
    return await this.petsService.create(data);
  }

  @Get('pets')
  async findAll() {
    return await this.petsService.findAll();
  }

  @Get('usuario/pets/:id')
  async findAllById(@Param('id') id: string) {
    return await this.petsService.findAllById(id);
  }

  @Get('pets/:id')
  async findOne(@Param('id') id: string) {
    return this.petsService.findOne(id);
  }

  @Put('disponivel/pets/:id')
  update(@Param('id') id: string, @Body() data: UpdatePetDto) {
    return this.petsService.update(id, data);
  }

  @Delete('pets/:id')
  remove(@Param('id') id: string) {
    return this.petsService.remove(id);
  }
}
