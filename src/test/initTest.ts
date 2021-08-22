import { TestingModule, Test } from '@nestjs/testing';
import { UserRepository } from '../user/entities/user.repository';
import { AppModule } from '../app.module';
import { router } from '../router';

const resetDatabase = async (module: TestingModule) => {
      const userRepository = module.get<UserRepository>(UserRepository);

      await userRepository.createQueryBuilder().delete().execute();
      await userRepository.clear();
};

export const initTestModule = async () => {
      const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
      }).compile();

      const configModule = module.createNestApplication();
      //apply middleware
      router(configModule);

      const getApp = await configModule.init();

      return {
            getApp,
            module,
            configModule,
            resetDatabase: async () => await resetDatabase(module),
      };
};
