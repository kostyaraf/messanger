import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getUserById(id: number) {
    return this.usersService.getUserById(id);
  }

  @Post()
  async createUser(@Body() userData: any) {
    return this.usersService.createUser(userData);
  }
}
