import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'biltoyn@nakhcho.vu',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: '1andoyn@nakhcho.vu',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'chertoyn@nakhcho.vu',
      createdAt: new Date(),
    },
  ];

  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
