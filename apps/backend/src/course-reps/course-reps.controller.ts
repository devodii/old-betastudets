/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { CourseRepsService } from './course-reps.service';
import { CurrentCourseRep } from './decorators/course-rep.decorator';
import { CourseRepAuthDto } from './dto/auth.dto';
import { CourseRepInterceptor } from './interceptors/course-rep.interceptor';

@Controller('course-rep')
export class CourseRepsController {
  constructor(private courseRepsServie: CourseRepsService) {}

  @Get('auth/whoAmI')
  async whoAmI(
    @CurrentCourseRep() courseRep: any,
    @Query('name') name: string
  ) {
    console.log({ name });
    return courseRep;
  }

  @UseInterceptors(CourseRepInterceptor)
  @Post('auth/signIn')
  async logIn(@Body() dto: CourseRepAuthDto) {
    console.log({ dto });
    return await this.courseRepsServie.signIn(dto);
  }
}
