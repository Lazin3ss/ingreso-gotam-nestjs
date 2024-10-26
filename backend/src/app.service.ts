import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Página principal (Frontend todavía no desarrollado)';
  }
}
