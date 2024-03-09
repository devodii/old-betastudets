import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CourseRepAuthDto } from './dto/auth.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CourseRepsService {
  constructor(private configService: ConfigService) {}

  private courseRepPassword = this.configService.get('COURSE_REP_PASSWORD');
  private courseRepeEmail = this.configService.get('COURSE_REP_EMAIL');

  public courseReps = [
    { email: this.courseRepeEmail, password: this.courseRepPassword },
  ];

  // todo: connect to entity.
  async signIn(dto: CourseRepAuthDto) {
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
