import {inject} from '@loopback/core';
import {HttpErrors} from '@loopback/rest';
import {securityId, UserProfile} from '@loopback/security';
import _jwt from 'jsonwebtoken';
import {promisify} from 'util';
import {Responsability, Services, TokenServiceBindings} from '../keys';
const jwt = require('jsonwebtoken');
const signAsync = promisify(jwt.sign);
const verifyAsync = promisify(jwt.verify);

export class JWTService {
  constructor(
    @inject(TokenServiceBindings.TOKEN_SECRET)
    public readonly jwtSecret: string,
    @inject(TokenServiceBindings.TOKEN_EXPIRES_IN)
    public readonly expiresSecret: string,

  ) {

  }
  // @inject('authentication.jwt.secret')
  async generateToken(userProfile: UserProfile): Promise<string> {
    if (!userProfile) {
      throw new HttpErrors.Unauthorized(
        'Error while generating token :userProfile is null'
      )
    }
    let token = '';
    try {
      const token = _jwt.sign(userProfile, this.jwtSecret, {
        expiresIn: this.expiresSecret,
      })

      return token;
    } catch (err) {
      throw new HttpErrors.Unauthorized(
        `error generating token ${err}`
      )
    }
  }

  async verifyToken(token: string): Promise<any> {

    if (!token) {
      throw new HttpErrors.Unauthorized(
        `Error verifying token:'token' is null`
      )
    };

    let userProfile
    try {
      const decryptedToken: any = await verifyAsync(token, this.jwtSecret, {
      });

      userProfile = {
        [securityId]: decryptedToken.id,
        id: decryptedToken.id,
        name: decryptedToken.name,
        email: decryptedToken.email,
        roles: decryptedToken.responsibilities.filter((item: Responsability) => item.role && item.service == Services.PROBLEM_SERVICE),
        responsibilities: decryptedToken.responsibilities
      }


    }
    catch (err) {
      throw new HttpErrors.Unauthorized(`Error verifying token:${err.message}`)
    }
    return userProfile;
  }
}

