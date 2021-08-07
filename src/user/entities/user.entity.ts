import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
      @PrimaryGeneratedColumn('uuid')
      id: string;

      @Column({ default: null })
      username: string;

      @Column({ default: null })
      password: string;

      @Column({ nullable: false })
      name: string;
}
