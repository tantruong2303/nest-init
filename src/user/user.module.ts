import { Module } from '@nestjs/common';
import { UserRepository } from './entities/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
      imports: [TypeOrmModule.forFeature([UserRepository])],
      controllers: [UserController],
      providers: [UserService],
      exports: [UserService],
})
export class UserModule {}
