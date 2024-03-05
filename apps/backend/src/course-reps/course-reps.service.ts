import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CourseRepAuthDto } from './dto/auth.dto';

@Injectable()
export class CourseRepsService {
  public courseReps = [{ email: 'emmanuelodii80@gmail.com', password: '1234' }];

  // todo: connect to entity.

  async signIn(dto: CourseRepAuthDto) {
    console.log({ dto });
    const user = this.courseReps.find(({ email }) => email === dto?.email);
    if (!user || dto?.password !== user.password) {
      throw new HttpException(
        'INCORRECT PASSWORD',
        HttpStatus.NON_AUTHORITATIVE_INFORMATION
      );
    }

    return { status: true, object: 'coursRep.loggedIn' };
  }
}
