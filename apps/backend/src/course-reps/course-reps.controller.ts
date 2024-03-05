/* eslint-disable @typescript-eslint/no-explicit-any */

import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth-service';
import { CourseRepAuthDto } from './dto/auth.dto';
import { CurrentCourseRep } from './decorators/course-rep.decorator';
import { CourseRepInterceptor } from './interceptors/course-rep.interceptor';

@Controller('course-rep')
export class CourseRepsController {
  constructor(private authService: AuthService) {}

  @Get('auth/whoAmI')
  async whoAmI(@CurrentCourseRep() courseRep: any) {
    return courseRep;
  }

  @Post('auth/signIn')
  @UseInterceptors(CourseRepInterceptor)
  async signIn(dto: CourseRepAuthDto) {
    console.log({ dto });
    return await this.authService.signIn(dto);
  }
}
