import { Module } from '@nestjs/common';
import { SecurityService } from './security.service';
import { SecurityController } from './security.controller';

@Module({
  imports: [],
  providers: [SecurityService],
  controllers: [SecurityController],
})
export class SecurityModule {}
