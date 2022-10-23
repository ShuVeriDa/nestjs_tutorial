import { Injectable } from '@nestjs/common';
import { UserType } from '../../types/UserType';
import { plainToClass } from 'class-transformer';
import { SerializedUser } from '../../types';

@Injectable()
export class UsersService {
  private users: UserType[] = [
    {
      username: 'shuverida',
      password: '12345',
    },
    {
      username: 'raf',
      password: '12345',
    },
    {
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
}
