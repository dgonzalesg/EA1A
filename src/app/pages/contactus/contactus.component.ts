import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactusForm = this.fb.group({
    person: this.fb.group({
      firstname: [''],
      lastname: [''],
    }),
    email: [''],
    message: [''],
  });


  constructor(
    private fb: FormBuilder
  ) {

   }
   onSubmit(){
     console.log(this.contactusForm.value);
   }

  ngOnInit(): void {
  }

}
