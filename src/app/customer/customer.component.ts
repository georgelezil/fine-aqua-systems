import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'customers',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  title = "Customer Registration";
  customers:any;
  isActive= true;

  onSave($event:any){
    $event.stopPropagation();
    console.log("Test : ", $event);
    alert("Test");
  }
  constructor(service: CustomersService) { 
    this.customers = service.getCutomers();
  }



} 
