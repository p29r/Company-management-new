import { Component, Input } from '@angular/core';
import { MeetingService } from '../../../core/services/meeting-service';

@Component({
  selector: 'app-project-meetings',
  imports: [],
  templateUrl: './project-meetings.html',
  styleUrl: './project-meetings.css'
})
export class ProjectMeetings {
  @Input() projectId: number = 0;
   constructor(private meetingService: MeetingService) { }
  
    ngOnInit(): void {
      this.getmeetingsByProjectID();
    }
  
    getmeetingsByProjectID() {
      this.meetingService.getMeetingsByProjectId(this.projectId).subscribe({
        next: (res) => {
          console.log("meetings", res);
  
        }
      })
    }
}
