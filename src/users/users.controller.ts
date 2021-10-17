import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  private readonly logger: Logger = new Logger(UsersController.name);

  constructor(private userService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.logger.log(`/signup request:`);
    this.logger.log(body);
    this.userService.create(body.email, body.password);
  }
}
