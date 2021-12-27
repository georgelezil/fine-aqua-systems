import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  getCutomers(){
    return ["Customer One","Customer Two","Customer Three"];
  }
}
