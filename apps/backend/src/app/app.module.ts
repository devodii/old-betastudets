import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CoursesModule } from '../courses/courses.module';
import { DatabaseModule } from '../database/database.module';
import { UsersModule } from '../users/users.module';
import { AppService } from './app.service';
import { SecurityModule } from '../security/security.module';

@Module({
  imports: [
    SecurityModule,
    DatabaseModule,
    CoursesModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
  ],
  providers: [AppService],
})
export class AppModule {}
