import { Component, inject, OnInit } from '@angular/core';
import { ShortNamePipe } from '../../../shared/pipe/short-name-pipe';
import { RouterLink } from '@angular/router';
import { ClientService } from '../../../core/services/client-service';
import { IClientModel } from '../../../core/models/interfaces/clientModel.model';

@Component({
  selector: 'app-client-list',
  imports: [ShortNamePipe, RouterLink],
  templateUrl: './client-list.html',
  styleUrl: './client-list.css'
})
export class ClientList implements OnInit {

  clientList: IClientModel[] = [];
  //services
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.getAllClientList();
  }

  getAllClientList() {
    this.clientService.getAllClient().subscribe({
      next: (res: any) => {
        debugger;
        this.clientList = res.data
      }
    })
  }
  onDelete(id: number) { }
}
