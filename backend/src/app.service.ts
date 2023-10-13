import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/';

@Injectable()
export class AppService {
  login(body: IUser) {
    return body;
  }
}
