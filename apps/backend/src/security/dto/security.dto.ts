import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SecurityDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
