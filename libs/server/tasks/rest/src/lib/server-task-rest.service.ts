import { Injectable } from '@nestjs/common';

@Injectable()
export class ServerTaskRestService {
  getData(): { message: string } {
    return { message: 'Hello, I\'m a Tasks API' };
  }
}
