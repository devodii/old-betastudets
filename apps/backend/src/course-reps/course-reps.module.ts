import { Module } from '@nestjs/common';
import { CourseRepsController } from './course-reps.controller';
import { CourseRepsService } from './course-reps.service';

@Module({
  imports: [],
  controllers: [CourseRepsController],
  providers: [CourseRepsService],
})
export class CourseRepsModule {}
