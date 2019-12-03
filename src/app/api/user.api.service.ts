import {Injectable} from '@angular/core';
import {BaseApiService} from './base.api.service';
import {UserModel} from '../models/user.model';

@Injectable()
export class UserApiService {
  constructor(private service: BaseApiService) {}

  register(user: UserModel) {
    return this.service.post(`auth/register`, user);
  }
}
