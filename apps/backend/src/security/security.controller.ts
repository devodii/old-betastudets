import { Body, Controller, Get, Logger, Post, Session } from '@nestjs/common';

import { SecurityService } from './security.service';
import { SecurityDto } from './dto/security.dto';

@Controller('auth')
export class AuthController {
  constructor(private securityService: SecurityService) {}

  private logger = new Logger(AuthController.name);

  @Get('whoAmI')
  whoAmI(@Session() session: Record<string, any>) {
    this.logger.log('getting current user');
    return session?.user ? session.user : null;
  }

  @Post('signIn')
  async signIn(
    @Body() dto: SecurityDto,
    @Session() session: Record<string, unknown>
  ) {
    this.logger.log('attempt to sign in', dto);
    const user = await this.securityService.signIn(dto);

    if (user.status) {
      session.user = user?.content;
    }

    return user;
  }
}
