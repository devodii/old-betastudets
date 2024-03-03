import { Module } from '@nestjs/common';
import { SecurityService } from './security.service';
import { AuthController } from './security.controller';

@Module({
  imports: [],
  providers: [SecurityService],
  controllers: [AuthController],
})
export class SecurityModule {}
