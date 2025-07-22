import { Component, Input, OnInit } from '@angular/core';
import { Paymentservice } from '../../../core/services/paymentservice';

@Component({
  selector: 'app-project-payment',
  imports: [],
  templateUrl: './project-payment.html',
  styleUrl: './project-payment.css'
})
export class ProjectPayment implements OnInit {
  @Input() projectId: number = 0;
  
  constructor(private paymentservice: Paymentservice) { }

  ngOnInit(): void {
    this.getPaymentsByProjectID();
  }

  getPaymentsByProjectID() {
    this.paymentservice.getPaymentsByProjectId(this.projectId).subscribe({
      next: (res) => {
        console.log("payments", res);

      }
    })
  }
}
