import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-form',
  imports: [],
  templateUrl: './project-form.html',
  styleUrl: './project-form.css'
})
export class ProjectForm {
  @Input() projectId: number = 0;
}
