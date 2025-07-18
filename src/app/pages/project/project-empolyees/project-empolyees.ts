import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-empolyees',
  imports: [],
  templateUrl: './project-empolyees.html',
  styleUrl: './project-empolyees.css'
})
export class ProjectEmpolyees {
  @Input() projectId: number = 0;
}
