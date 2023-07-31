import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async register(body) {
    const user = await this.userRepository.insert({
      email: body.email,
      name: body.name,
      password: body.password,
    });

    return user;
  }

  async getAll() {
    return await this.userRepository.find({});
  }
}
