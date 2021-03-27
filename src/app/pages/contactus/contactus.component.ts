import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactusForm = this.fb.group({
    person: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
    }),
    email: ['', [Validators.required, Validators.email]],
    message: [''],
  });


  constructor(
    private fb: FormBuilder
  ) {

   }
   onSubmit(){
    if(this.contactusForm.valid){
      console.log(this.contactusForm.valid)
    } 
    else{
      alert("Formulario no valido");
    }
    console.log(this.contactusForm.value);
     
   }
   onClean(){
     this.contactusForm.reset();
   }
   onUpdate(){
     this.contactusForm.patchValue({
      person: {
        firstname: "Diego",
        lastname: "Gonzales",
      },
      email: "dgonzalesg@gmail.com",
      message: "Este es un mensaje de prueba",
     });
   }

  ngOnInit(): void {
  }

}
