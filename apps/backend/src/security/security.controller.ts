import { Body, Controller, Get, Logger, Post, Session } from '@nestjs/common';

import { SecurityService } from './security.service';
import { SecurityDto } from './dto/security.dto';

@Controller('auth')
export class SecurityController {
  constructor(private securityService: SecurityService) {}

  private logger = new Logger(SecurityController.name);

  @Get('whoAmI')
  whoAmI(@Session() session: Record<string, any>) {
    this.logger.log('getting current user');

    const currentUser = session?.user ? session?.user : {};
    console.log({ session });
    return currentUser;
  }

  @Post('signIn')
  async signIn(
    @Body() dto: SecurityDto,
    @Session() session: Record<string, unknown>
  ) {
    const user = await this.securityService.signIn(dto);

    if (user.email) {
      console.log('storing a user!');
      session.user = user.email;
    }

    return { email: user.email };
  }
}
