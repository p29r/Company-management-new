import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class Paymentservice {

  constructor(private http: HttpClient) { }

  getPaymentsByProjectId(id: number) {
    return this.http.get(environment.API_URL + Constant.API_METHODS.PAYMENTS.GET_PAYMENTS_BY_PROJECTID + id);
  }
}
