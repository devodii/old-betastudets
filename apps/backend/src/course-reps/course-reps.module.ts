import { Module } from '@nestjs/common';
import { CourseRepsService } from './course-reps.service';
import { AuthService } from './auth-service';
import { CourseRepsController } from './course-reps.controller';

@Module({
  imports: [],
  controllers: [CourseRepsController],
  providers: [CourseRepsService, AuthService],
})
export class CourseRepsModule {}
