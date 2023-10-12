import { IsBoolean } from 'class-validator';

export class UpdatePetDto {
  @IsBoolean()
  disponivel: boolean;
}
