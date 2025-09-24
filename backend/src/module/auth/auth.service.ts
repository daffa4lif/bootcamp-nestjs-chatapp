import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {}

  async login(user: User, response: Response) {
    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() +
        Number(this.configService.getOrThrow('JWT_EXPIRED')),
    );
  }
}
