import {Injectable} from '@angular/core';
import {UserApiService} from '../api/user.api.service';

@Injectable()
export class UserService {
  constructor(private userApiService: UserApiService) {}
}
