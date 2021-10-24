// Decorators that will help TypeORM to understand the different properties
import { Logger } from '@nestjs/common';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
// Exclude is a decorator
import { Exclude } from 'class-transformer';

// By naming convention, this entity class must be called User and not UserEntity
@Entity()
export class User {
  private readonly logger: Logger = new Logger(User.name);

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  // Whenever we insert a new user into the database, this function should be executed
  @AfterInsert()
  logInsert() {
    this.logger.log(`Inserted User with id: ${this.id}`);
  }

  // Whenever we remove a new user into the database, this function should be executed
  @AfterRemove()
  logRemove() {
    this.logger.log(`Removed User with id: ${this.id}`);
  }

  // Whenever we update a new user into the database, this function should be executed
  @AfterUpdate()
  logUpdate() {
    this.logger.log(`Updated User with id: ${this.id}`);
  }
}
