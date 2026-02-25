import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Max Barskih' },
  ];

  async getUsers() {
    const respondedUsers = new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.users);
      }, 1000);
    });
    return respondedUsers;
  }

  async getUserById(id: number) {
    console.log('>> id', id);
    const user = new Promise((resolve, reject) => {
      setTimeout(() => {
        const findUser = this.users.find((u) => u.id === id);

        if (findUser) {
          resolve(findUser);
        } else {
          reject(new NotFoundException('User not found'));
        }
      }, 1000);
    });
    return user;
  }

  async createUser(userData: CreateUserDto) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.users.push({ id: this.users.length + 1, name: userData.name });
        resolve({ id: 3, data: userData });
      }, 1000);
    });
  }
}
