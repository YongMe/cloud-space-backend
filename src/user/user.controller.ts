import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() body: object) {
    return this.userService.register(body);
  }

  @Get('/all')
  all() {
    return this.userService.getAll();
  }
}
