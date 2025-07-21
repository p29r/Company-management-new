import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ShortNamePipe } from '../../../shared/pipe/short-name-pipe';
import { RouterLink } from '@angular/router';
import { ClientService } from '../../../core/services/client-service';
import { IClientModel } from '../../../core/models/interfaces/clientModel.model';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-client-list',
  imports: [ShortNamePipe, RouterLink],
  templateUrl: './client-list.html',
  styleUrl: './client-list.css'
})
export class ClientList implements OnInit, AfterViewInit {

  clientList: IClientModel[] = [];
  //private modalInstance: bootstrap.Modal | undefined;
  @ViewChild("newModal") modalInstance!:  ElementRef;
  title:string ='Add Client';
  //
  @ViewChild('clientForm') clientForm!: ElementRef;

  //services
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.getAllClientList();
  }

  ngAfterViewInit() {
    //this.modalInstance = new bootstrap.Modal(this.clientForm.nativeElement);
  }

  getAllClientList() {
    this.clientService.getAllClient().subscribe({
      next: (res: any) => {
        debugger;
        this.clientList = res.data
      }
    })
  }

  openModalPopUp() {
     debugger;
    if(this.modalInstance) {
      this.modalInstance.nativeElement.style.display = 'block'
    }
  }
  
  onDelete(clientId: number) {
     this.clientService.deleteClient(clientId).subscribe({
      next: (res: any) => {
        debugger;
       //this.clientList = res.data
       this.getAllClientList();
      }
    })
   }
}
