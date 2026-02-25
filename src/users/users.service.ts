import { Injectable } from '@nestjs/common';
import { rejects } from 'assert';

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
    const user = new Promise((resolve) => {
      setTimeout(() => {
        const findUser = this.users.find((u) => u.id === id);
        if (findUser) {
          resolve(findUser);
        } else {
          rejects(() => Promise.reject(new Error('User not found')));
        }
      }, 1000);
    });
    return user;
  }

  async createUser(userData: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        resolve({ id: 3, data: userData });
      }, 1000);
    });
  }
}
