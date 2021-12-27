import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  
  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'PHONE'}
  ];

  log(x:any) { console.log(x);}

  submit(f:any) {console.log(f.value)};

}
