/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class AuthUsuarioDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 5,
    minUppercase: 1,
    minSymbols: 1,
  })
  senha: string;
}
