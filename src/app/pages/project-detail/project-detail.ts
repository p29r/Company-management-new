import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tabs } from '../../shared/reusableComponents/tabs/tabs';
import { ProjectForm } from '../project-form/project-form';
import { ProjectChange } from '../project/project-change/project-change';
import { ProjectPayment } from '../project/project-payment/project-payment';
import { ProjectMeetings } from '../project/project-meetings/project-meetings';
import { ProjectEmpolyees } from '../project/project-empolyees/project-empolyees';
import { Project } from '../project/project';

@Component({
  selector: 'app-project-detail',
  imports: [Tabs, ProjectForm, ProjectChange, ProjectPayment, ProjectMeetings,ProjectEmpolyees,Project],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail {
  projectTabs: string[] = ['View Project Details','Edit Project Details', 'Employees', 'Meeting', 'Change', 'Payment'];
  currentTabName: string = 'Payment';
  currentProjectId: number = 0;
  constructor(private acttiavteRouet: ActivatedRoute) {
    this.acttiavteRouet.params.subscribe((res: any) => {
      this.currentProjectId = res.projectid
    })
  }

  onTabSelect(tabName: string) {
    this.currentTabName = tabName;
  }

  
}
