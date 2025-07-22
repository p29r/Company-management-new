import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {
constructor(private http: HttpClient) { }

  getProjectChangeByProjectId(id: number) {
    return this.http.get(environment.API_URL + Constant.API_METHODS.CHANGE.GET_PROJECT_CHANGE_BY_PROJECTID + id);
  }
}
