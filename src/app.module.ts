import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [UsuariosModule, PetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
