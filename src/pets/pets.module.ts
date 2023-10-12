import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PrismaService } from 'src/infra/database/prisma.service';

@Module({
  controllers: [PetsController],
  providers: [PetsService, PrismaService],
})
export class PetsModule {}
