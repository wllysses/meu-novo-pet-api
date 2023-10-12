import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsStrongPassword,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  telefone: string;

  @IsNotEmpty()
  cidade: string;

  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 5,
    minUppercase: 1,
    minSymbols: 1,
  })
  senha: string;

  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 5,
    minUppercase: 1,
    minSymbols: 1,
  })
  confirmar_senha: string;
}
