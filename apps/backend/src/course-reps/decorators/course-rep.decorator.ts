import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const CurrentCourseRep = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.session.courseRep;
  }
);
