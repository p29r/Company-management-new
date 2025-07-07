import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../../../core/models/class/employee.model';
import { EmployeeService } from '../../../core/services/employee-service';
import { MasterService } from '../../../core/services/master-service';

@Component({
  selector: 'app-employee-form',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm implements OnInit {
  employeeObj: Employee = new Employee();
  currentEmpId: number = 0;
  title :string ='Create New Employee';

  //    roleList: any;
  roleList$: Observable<any> = new Observable<any>();
  deginationList$: Observable<any> = new Observable<any>();

  //service
  masterService = inject(MasterService);
  emplyoeeService = inject(EmployeeService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute.params.subscribe({
      next: (params: any) => {
        debugger;
        this.currentEmpId = params.id;
        if(params?.id != 0){
          this.getEmpyeeByID(this.currentEmpId);
           this.title = 'Update Employee';
        }
      }
    })
  }

  ngOnInit(): void {
    this.roleList$ = this.masterService.getAllRoles();
    this.deginationList$ = this.masterService.getAllDesignations();
  }

  getEmpyeeByID(id: number) {
    this.emplyoeeService.getEmployeeByEmpId(id).subscribe({
      next: (res: any) => {
        this.employeeObj = res.data;
      }
    })
  }
  
  onSave() {
    this.emplyoeeService.createEmployee(this.employeeObj).subscribe({
      next: (res: any) => {
        //alter employee created sucessfully
        alert("Success!  employee created Sucessfully...!");
        this.router.navigateByUrl('/employee-list');
      }, error: (err: any) => { }
    })
  }

  onUpdate(){
    debugger;
    this.emplyoeeService.updateEmployee(this.employeeObj).subscribe({
      next: (res: any) => {
        //alter employee created sucessfully
        alert("Success!  employee Updated Sucessfully...!");
        this.router.navigateByUrl('/employee-list');
      }, error: (err: any) => { }
    })
  }
}
