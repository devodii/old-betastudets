/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { CourseRepsService } from '../course-reps.service';

@Injectable()
export class CourseRepInterceptor implements NestInterceptor {
  constructor(private courseRepsService: CourseRepsService) {}
  async intercept(ctx: ExecutionContext, handler: CallHandler<any>) {
    const request = ctx.switchToHttp().getRequest();

    const { email: emailFromRequest } = request.body;

    const courseRep = this.courseRepsService.courseReps.find(
      ({ email }) => email === emailFromRequest
    );

    if (courseRep.email) {
      request.session.courseRep = courseRep;
    }

    return handler.handle();
  }
}
