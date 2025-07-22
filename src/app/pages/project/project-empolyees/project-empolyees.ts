import { Component, Input } from '@angular/core';
import { EmployeeService } from '../../../core/services/employee-service';

@Component({
  selector: 'app-project-empolyees',
  imports: [],
  templateUrl: './project-empolyees.html',
  styleUrl: './project-empolyees.css'
})
export class ProjectEmpolyees {
  @Input() projectId: number = 0;

   constructor(private employeeService: EmployeeService) { }
    
      ngOnInit(): void {
        this.getEmployeeByProjectId();
      }
    
      getEmployeeByProjectId() {
        this.employeeService.getEmployeeByProjectId(this.projectId).subscribe({
          next: (res) => {
            console.log("meetings", res);
    
          }
        })
      }
}
