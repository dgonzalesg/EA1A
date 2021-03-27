import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.valid)
    } 
    else{
      alert("Login Incorrecto!!");
    }
    console.log(this.loginForm.value);
     
   }

}
