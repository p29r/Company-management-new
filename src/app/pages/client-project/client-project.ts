import { Component, inject, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-client-project',
  imports: [DatePipe,RouterLink],
  templateUrl: './client-project.html',
  styleUrl: './client-project.css'
})
export class ClientProject implements OnInit{
 tabsArray: string []= ['Project Basic','Employees','Meeting','Change Log'];
  projectServ = inject(ProjectService);

  currentTab: string = 'Project Basic';
  projectList:any[]= [];

  tabChanges(selectedTabName: string) {
    debugger;
    this.currentTab = selectedTabName;
  }

  ngOnInit(): void {
    this.getAllProjects()
  }

  getAllProjects() {
    this.projectServ.getAllClientProject().subscribe((res:any)=>{
      this.projectList =  res.data;
    })
  }
}
