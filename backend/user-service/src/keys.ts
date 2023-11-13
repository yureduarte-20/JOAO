export enum Roles {
  ADMIN = 'ADMIN',
  ADVISOR = 'ADVISOR',
  STUDENT = 'STUDENT'
}

export enum Services {
  USER_SERVICE = 'USER_SERVICE',
  PROBLEM_SERVICE = 'PROBLEM_SERVICE',
  CHAT_SERVICE = 'CHAT_SERVICE',
  JUDGE_SERVICE = 'JUDGE_SERVICE'
}

export type Responsability = {
  service: Services;
  role: Roles
}
import { TokenService, UserService } from '@loopback/authentication';
import { BindingKey } from '@loopback/core';
import { User } from './models';
import fs from 'fs'

export type Credentials = {
  email: string;
  password: string;
}
export namespace TokenServiceConstants {
  export const TOKEN_SECRET_VALUE = 'chave_secreta';
  export const TOKEN_EXPIRES_IN_VALUE = '7h';
}
export namespace TokenServiceBindings {
  export const TOKEN_SECRET = BindingKey.create<string>(
    'authentication.jwt.secret',
  );
  export const TOKEN_EXPIRES_IN = BindingKey.create<string>(
    'authentication.jwt.expiresIn',
  );
  export const TOKEN_SERVICE = BindingKey.create<TokenService>(
    'services.jwt.service',
  );
}

export namespace UserServiceBindings {
  export const USER_SERVICE = BindingKey.create<UserService<Credentials, User>>(
    'services.user.service',
  );
}