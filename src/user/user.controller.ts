import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

import { apiResponse } from '../app/interface/apiResponse';

@Controller('user')
export class UserController {
      constructor(private readonly userService: UserService) {}

      @Get('/test')
      async test() {
            const user = new User();
            user.email = 'test';
            user.name = 'Test';
            user.password = '123';
            await this.userService.saveUser(user);
            const userDB = await this.userService.findOneUserByField('name', 'Test');

            return apiResponse.send<User>({ data: userDB });
      }
}
