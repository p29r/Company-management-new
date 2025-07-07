import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClient() {
    return this.http.get(environment.API_URL + Constant.API_METHODS.CLIENT.GET_ALL_CLIENT);
  }

  createClient(clientObj: any) {
    return this.http.post(environment.API_URL + Constant.API_METHODS.CLIENT.CREATE_CLIENT, clientObj);
  }

  updateClient(clientObj: any) {
    return this.http.put(environment.API_URL + Constant.API_METHODS.CLIENT.UPDATE_CLIENT, clientObj);
  }

  deleteClient(clientId: number) {
    return this.http.delete(environment.API_URL + Constant.API_METHODS.CLIENT.DELETE_CLIENT + clientId);
  }

  getClientByClientId(clientId: number) {
    return this.http.get(environment.API_URL + Constant.API_METHODS.CLIENT.GET_CLIENT_BY_ID + clientId);
  }
}
