// Decorators that will help TypeORM to understand the different properties
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// By naming convention, this entity class must be called User and not UserEntity
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
