import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constants/constant';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

   constructor(private http: HttpClient) { }

   getAllRoles() {
    return this.http.get(environment.API_URL + Constant.API_METHODS.MASTER.GET_ALL_ROLES).pipe(
      map((res:any)=> res.data)
    );
  }

  getAllDesignations() {
    return this.http.get(environment.API_URL + Constant.API_METHODS.MASTER.GET_ALL_DESIGNATIONS).pipe(
      map((res:any)=>res.data)
    );;
  }

}
