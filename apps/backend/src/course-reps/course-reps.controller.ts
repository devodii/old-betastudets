/* eslint-disable @typescript-eslint/no-explicit-any */

import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { CourseRepsService } from './course-reps.service';
import { CurrentCourseRep } from './decorators/course-rep.decorator';
import { CourseRepAuthDto } from './dto/auth.dto';
import { CourseRepInterceptor } from './interceptors/course-rep.interceptor';

@Controller('course-rep')
export class CourseRepsController {
  constructor(private courseRepsServie: CourseRepsService) {}

  @Get('auth/whoAmI')
  async whoAmI(@CurrentCourseRep() courseRep: any) {
    return courseRep;
  }

  @UseInterceptors(CourseRepInterceptor)
  @Post('auth/signIn')
  async signIn(@Body() dto: CourseRepAuthDto) {
    return await this.courseRepsServie.signIn(dto);
  }
}
