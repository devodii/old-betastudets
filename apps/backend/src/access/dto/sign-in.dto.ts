import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { User } from "../../users/entities/user.entity";

export class SignInDto implements Partial<User> {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
