import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

 constructor(private http: HttpClient) { }

  getMeetingsByProjectId(id: number) {
    return this.http.get(environment.API_URL + Constant.API_METHODS.MEETINGS.GET_MEETINGS_BY_PROJECTID + id);
  }
}
