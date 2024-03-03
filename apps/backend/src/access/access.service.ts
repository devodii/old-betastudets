import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInDto } from './dto';

@Injectable()
export class AccessService {
  private courseReps = [
    { email: 'emmanuelodii80@gmail.com', password: '1234' },
  ];

  async signIn(dto: SignInDto) {
    const user = this.courseReps.find(({ email }) => email === dto.email);
    if (dto.password !== user?.password) {
      throw new HttpException(
        'INCORRECT PASSWORD',
        HttpStatus.NON_AUTHORITATIVE_INFORMATION
      );
    }

    return { status: true, content: user };
  }
}
