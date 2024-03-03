import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SecurityDto } from './dto/security.dto';

@Injectable()
export class SecurityService {
  private courseReps = [
    { email: 'emmanuelodii80@gmail.com', password: '1234' },
  ];

  async signIn(dto: SecurityDto) {
    const user = this.courseReps.find(({ email }) => email === dto?.email);
    if (dto?.password != user?.password) {
      throw new HttpException(
        'INCORRECT PASSWORD',
        HttpStatus.NON_AUTHORITATIVE_INFORMATION
      );
    }

    console.log({ user });

    return user ? { status: true, content: user } : null;
  }
}
