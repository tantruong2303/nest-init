import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
      public async findOneByField(field: keyof User, value: any): Promise<User> {
            const results = await this.createQueryBuilder().where(`${field} = :value`, { value }).getOne();
            return results;
      }
}
