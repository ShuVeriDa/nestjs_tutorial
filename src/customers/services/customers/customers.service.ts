import { Injectable } from '@nestjs/common';
import { CustomerType } from '../../types/Customer';
import { CreateCustomerDto } from '../../dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
  private customers: CustomerType[] = [
    {
      id: 1,
      email: 'biltoyn@nakhcho.vu',
      name: 'Biltoyn Said-Ahmady Said-Muhammad',
    },
    {
      id: 2,
      email: '1andoyn@nakhcho.vu',
      name: '1Andoyn Muhammady Ramzan',
    },
    {
      id: 3,
      email: 'chertoyn@nakhcho.vu',
      name: 'Chartoyn Ibrahimy Bilal',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  getCustomers() {
    return this.customers;
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
