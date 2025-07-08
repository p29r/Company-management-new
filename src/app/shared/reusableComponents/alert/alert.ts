import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ALERTCLASS } from '../../../core/constants/alert.enum';

@Component({
  selector: 'app-alert',
  imports: [NgClass],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert {
  @Input() alertTitle: string = "Success";
  @Input() alertMessage: string = "API response ";
  @Input() alertClassName: string = ALERTCLASS.SUCCESS;
  timeoutId: any;
  showAlert: boolean = false;

  show(): void {
    let duration: number = 3000
    //this.alertMessage = alertMessage;
    this.showAlert = true;

    // Clear any existing timeout to avoid conflicts
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      this.hide();
    }, duration);
  }

  hide(): void {
    this.showAlert = false;
    this.alertMessage = ''; // Optional: Clear message
    this.timeoutId = null;
  }

}
