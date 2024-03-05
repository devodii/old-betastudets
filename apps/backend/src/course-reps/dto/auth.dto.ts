import { IsEmail, IsNotEmpty } from 'class-validator';

export class CourseRepAuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEmail()
  @IsNotEmpty()
  password: string;
}
