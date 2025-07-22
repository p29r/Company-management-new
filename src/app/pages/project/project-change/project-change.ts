import { Component, Input, OnInit } from '@angular/core';
import { ChangeService } from '../../../core/services/change-service';

@Component({
  selector: 'app-project-change',
  imports: [],
  templateUrl: './project-change.html',
  styleUrl: './project-change.css'
})
export class ProjectChange implements OnInit {
  @Input() projectId: number = 0;

  constructor(private projectChangeService: ChangeService) { }

  ngOnInit(): void {
    this.getProjectChangesByProjectId();
  }

  getProjectChangesByProjectId(){
     this.projectChangeService.getProjectChangeByProjectId(this.projectId).subscribe({
      next:(res)=>{
        console.log("project changes",res);
        
      }
     })
  }

}
