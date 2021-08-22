import { INestApplication } from '@nestjs/common';
import { UserRepository } from '../entities/user.repository';
import { UserService } from '../user.service';
import { initTestModule } from '../../test/initTest';
import { User } from '../entities/user.entity';

describe('UserService', () => {
      let app: INestApplication;
      let userRepository: UserRepository;
      let userService: UserService;
      let resetDB: any;
      let user: User;

      beforeAll(async () => {
            const { getApp, module, resetDatabase } = await initTestModule();
            app = getApp;
            userRepository = module.get<UserRepository>(UserRepository);
            userService = module.get<UserService>(UserService);
            resetDB = resetDatabase;
      });

      describe('saveUser', () => {
            beforeEach(() => {
                  user = new User();
                  user.email = 'test';
                  user.name = 'Test';
                  user.password = '123';
            });

            it('Pass', async () => {
                  const res = await userService.saveUser(user);
                  expect(res).toBeDefined();
            });

            it('Pass (the same id)', async () => {
                  await userService.saveUser(user);
                  user.email = 'update';
                  await userService.saveUser(user);
                  const res = await userRepository.findOne({ email: 'update' });
                  expect(res).toBeDefined();
                  expect(res.email).toBe('update');
            });
      });

      afterAll(async () => {
            await resetDB();
            await app.close();
      });
});
