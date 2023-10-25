import { Controller, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Body } from '@nestjs/common';
import { IUser } from './interfaces/';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  @ApiResponse({ status: 200, description: 'Login realizado com sucesso.' })
  @ApiResponse({ status: 401, description: 'Usuário ou senha inválidos.' })
  async login(@Body() body: IUser) {
    try {
      const response = await this.appService.login(body);
      if (response) {
        return response;
      }
    } catch (error) {
      throw new Error('Erro no login');
    }
  }
}
