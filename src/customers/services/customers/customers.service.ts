import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomer() {
    return {
      id: 1,
      email: 'biltoyn@nakhcho.vu',
      createdAt: new Date(),
    };
  }
}
