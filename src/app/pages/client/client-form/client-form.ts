import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../core/services/client-service';

@Component({
  selector: 'app-client-form',
  imports: [ReactiveFormsModule],
  templateUrl: './client-form.html',
  styleUrl: './client-form.css'
})
export class ClientForm implements OnInit {
  title: string = '';
  clientObj: FormGroup = new FormGroup({});
  currentClientId: number = 0;
  currentCLientDtails: any = {}

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService
  ) {

  }

  ngOnInit(): void {
    this.initializeForm();
    this.activatedRoute.params.subscribe({
      next: (res: any) => {
        console.log("res", res);
        this.currentClientId = parseInt(res.id);
        if (res.id !== '0') {
          this.getClientByClientId(res.id);
        }
        this.setTitle();
      },
      error: () => { }
    })
  }

  setTitle() {
    this.currentClientId === 0 ? this.title = 'Add New Client' : this.title = 'Edit Client'
  }

  getClientByClientId(id: number) {
    this.clientService.getClientByClientId(id).subscribe({
      next: (res: any) => {
        debugger;
        this.currentCLientDtails = res.data
        //this.initializeForm(this.currentCLientDtails);
        //this.clientList = res.data
        // this.getAllClientList();
        this.setFormValues(res.data)
      }
    })
  }

  setFormValues(clientData: any) {
    this.clientObj.setValue({
      clientId: clientData.clientId,
      contactPersonName: clientData.contactPersonName,
      companyName: clientData.companyName,
      address: clientData.address,
      city: clientData.city,
      pincode: clientData.pincode,
      state: clientData.state,
      EmployeeStrength: clientData.employeeStrength,
      gstNo: clientData.gstNo,
      contactNo: clientData.contactNo,
      regNo: clientData.regNo,
    })
  }


  initializeForm() {
    this.clientObj = new FormGroup({
      clientId: new FormControl(0),
      contactPersonName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      companyName: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      pincode: new FormControl(''),
      state: new FormControl(''),
      EmployeeStrength: new FormControl(''),
      gstNo: new FormControl(''),
      contactNo: new FormControl(''),
      regNo: new FormControl(''),
    })
  }


  onRset() {
    if(this.currentClientId == 0){
      this.initializeForm()
    }else{
      this.setFormValues(this.currentCLientDtails);
    }
  }

  onSave() {
    console.log(">>> client", this.clientObj.value);
    this.clientService.addUpdateClient(this.clientObj.value).subscribe({
      next: (res) => {
        console.log(res);
      }
    })

  }

}
