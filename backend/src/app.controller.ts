import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Body } from '@nestjs/common';
import { IUser } from './interfaces/';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  login(@Body() body: IUser) {
    return this.appService.login(body);
  }
}
