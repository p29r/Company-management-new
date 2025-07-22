import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployee() {
    return this.http.get(environment.API_URL + Constant.API_METHODS.EMPLOYEE.GET_ALL_EMPLOYEE);
  }

  createEmployee(empObj: any) {
    return this.http.post(environment.API_URL + Constant.API_METHODS.EMPLOYEE.CREATE_EMPLOYEE, empObj);
  }

  updateEmployee(empObj: any) {
    return this.http.put(environment.API_URL + Constant.API_METHODS.EMPLOYEE.UPDATE_EMPLOYEE, empObj);
  }

  deleteEmployee(empId: number) {
    return this.http.delete(environment.API_URL + Constant.API_METHODS.EMPLOYEE.DELETE_EMPLOYEE + empId);
  }

  getEmployeeByEmpId(empId: number) {
    return this.http.get(environment.API_URL + Constant.API_METHODS.EMPLOYEE.GET_EMPLOYEE_BY_ID + empId);
  }

   getEmployeeByProjectId(projectId: number) {
    return this.http.get(environment.API_URL + Constant.API_METHODS.EMPLOYEE.GET_EMPLOYEE_BY_PROJECTID + projectId);
  }
}
