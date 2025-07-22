import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
  @Input() projectId: number = 0;
}
