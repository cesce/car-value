import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {
  private readonly logger: Logger = new Logger(UsersController.name);

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.logger.log(body);
  }
}
