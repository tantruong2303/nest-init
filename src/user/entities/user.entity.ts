import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRole } from './userRole.enum';

@Entity()
export class User {
      @PrimaryGeneratedColumn('uuid')
      id: string;

      @Column({ default: null })
      email: string;

      @Column({ default: null })
      password: string;

      @Column({ nullable: false })
      name: string;

      @Column({ default: false })
      isVerifiedEmail?: boolean;

      @Column({ nullable: false })
      fullName?: string;

      @Column({ default: '' })
      avatarUrl?: string;

      @Column({ default: new Date().toISOString().slice(0, 19).replace('T', ' ') })
      createDate?: Date;

      @Column({ default: UserRole.USER.toString() })
      role?: string;

      @Column({ default: false })
      isDisabled?: boolean;

      @Column({ default: false })
      isPaid?: boolean;
}
