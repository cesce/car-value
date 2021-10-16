import { Module } from '@nestjs/common';
// We need to import the TypeOrmModule to connect it with the module
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
// We need to import the User Entity
import { User } from './user.entity';

@Module({
  // This step creates the repository for us
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
