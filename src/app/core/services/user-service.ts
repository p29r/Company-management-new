import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UserLogin } from '../models/class/userLogin.model';
import { Constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(obj:UserLogin) {
    debugger;
    return this.http.post(environment.API_URL + Constant.API_METHODS.LOGIN, obj);
  }
}
