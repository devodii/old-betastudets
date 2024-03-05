import { HttpException, HttpStatus } from '@nestjs/common';
import { CourseRepsService } from './course-reps.service';
import { CourseRepAuthDto } from './dto/auth.dto';

export class AuthService {
  constructor(private courseRepsService: CourseRepsService) {}

  async signIn(dto: CourseRepAuthDto) {
    console.log({ dto });
    const user = this.courseRepsService.courseReps.find(
      ({ email }) => email === dto?.email
    );
    if (!user || dto?.password !== user.password) {
      throw new HttpException(
        'INCORRECT PASSWORD',
        HttpStatus.NON_AUTHORITATIVE_INFORMATION
      );
    }

    return user;
  }
}
