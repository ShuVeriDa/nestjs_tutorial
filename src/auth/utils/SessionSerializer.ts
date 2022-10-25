import { PassportSerializer } from '@nestjs/passport';
import { Inject } from '@nestjs/common';
import { UsersService } from '../../users/services/users/users.service';
import { UserEntities } from '../../typeorm/UserEntities';

export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {
    super();
  }

  serializeUser(user: UserEntities, done: (error, user: UserEntities) => void) {
    console.log('serializeUser');
    done(null, user);
  }
  async deserializeUser(
    user: UserEntities,
    done: (error, user: UserEntities) => void,
  ) {
    console.log('deserializeUser');
    const userDB = await this.userService.findUserById(user.id);
    return userDB ? done(null, userDB) : done(null, null);
  }
}
