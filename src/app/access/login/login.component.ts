import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    loginUsuario: ['', [Validators.required]],
    passwordUsuario: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private readonly userService : UserService, private readonly router: Router) { }

  login(dataUser){
    this.userService.login(dataUser).subscribe((rest:any) =>{
      if(rest.isSucess){
        sessionStorage.setItem('token', rest.data.token);
        console.log(sessionStorage.getItem('token'));
        alert("Login Exitoso");
        this.router.navigate(['home'])
      }else{
        alert("Credenciales Invalidas");
      }
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.login(this.loginForm.value);
    } 
    else{
      alert("Login Incorrecto!!");
    }
    console.log(this.loginForm.value);
     
   }

}
