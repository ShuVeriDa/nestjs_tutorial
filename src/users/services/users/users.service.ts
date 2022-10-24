import { Injectable } from '@nestjs/common';
import { UserType } from '../../types/UserType';
import { SerializedUser } from '../../types';
import { CreateUserDto } from '../../dto/CreateUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntities } from '../../../typeorm/UserEntities';
import { Repository } from 'typeorm';
import { encodePassword } from '../../../utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntities)
    private readonly userRepository: Repository<UserEntities>,
  ) {}

  private users: UserType[] = [];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    const password = encodePassword(createUserDto.password);
    console.log(password);
    const newUser = this.userRepository.create({ ...createUserDto, password });
    return this.userRepository.save(newUser);
  }

  findUserByUsername(username: string) {
    return this.userRepository.findOneBy({ username });
  }
}
