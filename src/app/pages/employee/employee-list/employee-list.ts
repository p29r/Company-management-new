import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ALERTCLASS } from '../../../core/constants/alert.enum';
import { AlertModel } from '../../../core/models/class/alertModel.model';
import { IEmployeeModel } from '../../../core/models/interfaces/employeeModel.model';
import { EmployeeService } from '../../../core/services/employee-service';
import { ShortNamePipe } from '../../../shared/pipe/short-name-pipe';
import { Alert } from "../../../shared/reusableComponents/alert/alert";

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink, ShortNamePipe, Alert],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {

  employeeList: IEmployeeModel[] = [];
  alertObj:AlertModel = new AlertModel();

  //decorative variables
  @ViewChild('alertComponent') alertComponent!: Alert;
  //service
  employeeService = inject(EmployeeService);

  constructor() {
    // this.alertObj.title = '';
    // this.alertObj.message = '';
    // this.alertObj.ALERTCLASS.SUCCESS;
  }

  ngOnInit(): void {
    this.getAllEmployeeList();
  }


  getAllEmployeeList() {
    this.employeeService.getAllEmployee().subscribe({
      next: (res: any) => {
        //debugger;
        this.employeeList = res.data;
        this.alertObj.className = ALERTCLASS.SUCCESS;
        this.alertObj.title = 'Success';
        this.alertObj.message = ' get all employee API ';
        this.alertComponent.show();
      },
      error: () => {
        debugger;
        this.alertObj.className = ALERTCLASS.WARNING;
        this.alertObj.title = 'Warning';
        this.alertObj.message = ' get all employee API Failed ';
        this.alertComponent.show();
      }
    })
  }

  onDelete(id: number) {
    debugger;
    this.employeeService.deleteEmployee(id).subscribe({
      next: (res: any) => {
        this.alertObj.className = ALERTCLASS.DANGER;
        this.alertObj.title = 'Deleted';
        this.alertObj.message = ` employee -${id} deleted success full`;
        //alert(`Suucess! emplyee -${id} deleted success full`);
        this.getAllEmployeeList();
      },
      error: (err: any) => {
      }
    })
  }
}
