import { Injectable } from '@nestjs/common';
import { UserType } from '../../types/UserType';
import { SerializedUser } from '../../types';

@Injectable()
export class UsersService {
  private users: UserType[] = [
    {
      id: 1,
      username: 'shuverida',
      password: '12345',
    },
    {
      id: 2,
      username: 'raf',
      password: '12345',
    },
    {
      id: 3,
      username: 'billy',
      password: '12345',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
