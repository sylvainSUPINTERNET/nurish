import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './db/user/services/user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UserService) {}

  @Get()
  async getHello(): Promise<string> {
    await this.userService.create({
      email: "sylvain.test@tet.com"
    })
    return this.appService.getHello();
  }
}
