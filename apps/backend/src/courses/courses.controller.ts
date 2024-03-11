import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CoursesService, type ID } from './courses.service';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { CourseRepGuard } from '../course-reps/guards/course-rep.guard';
@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  private logger = new Logger(CoursesController.name);

  @Get()
  async findAllCourses() {
    return await this.coursesService.findAll();
  }

  @Get(':id')
  async findOneCourse(@Param('id') id: string) {
    return await this.coursesService.find(Number(id));
  }

  @Post()
  @UseGuards(CourseRepGuard)
  async createCourse(@Body() dto: CreateCourseDto) {
    return await this.coursesService.create(dto);
  }

  @Patch(':id')
  async updateCourse(
    @Param('id', ParseIntPipe) id: ID,
    @Body() dto: UpdateCourseDto
  ) {
    return await this.coursesService.update(id, dto);
  }

  @Delete(':id')
  async removeCourse(@Param('id', ParseIntPipe) id: ID) {
    return await this.coursesService.delete(id);
  }
}
