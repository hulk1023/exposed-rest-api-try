import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('register')
  async register(@Query('category') category): Promise<number> {
    return await this.appService.RegisterNumber(category);
  }

  @Get('list')
  async list(): Promise<any> {
    return await this.appService.ListRegister();
  }
}
