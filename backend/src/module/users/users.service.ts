import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserInput: CreateUserInput) {
    return this.userRepository.create({
      ...createUserInput,
      password: await bcrypt.hash(createUserInput.password, 10),
    });
  }

  async findAll() {
    return this.userRepository.find({});
  }

  async findOne(_id: string) {
    return this.userRepository.findOne({ _id });
  }

  update(_id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${_id} user`;
  }

  remove(_id: string) {
    return `This action removes a #${_id} user`;
  }
}
