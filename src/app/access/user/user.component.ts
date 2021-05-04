import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm = this.fb.group({
    loginUsuario: ['', [Validators.required]],
    passwordUsuario: ['', Validators.required],
    idPerfil: ['', Validators.required],
    nombres: ['', Validators.required],
    apellidoPaterno: ['', Validators.required],
    apellidoMaterno: ['', Validators.required],
    documentoIdentidad: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private readonly userService: UserService, private readonly router: Router) { }

  ngOnInit(): void {
  }



  newUser(dataUser){
    const token = sessionStorage.getItem('token');
    const header = { Authorization : 'Bearer ' + token };
    this.userService.newUser(dataUser, header).subscribe((rest:any) =>{
      if(rest.isSucess){
        alert("Usuario Creado con ID : " + rest.data.id + " Nombre: " + rest.data.nombre);
        this.router.navigate(['login'])
      }else{
        alert("Credenciales Invalidas");
      }
    });
  }

  onSubmit(){
    if(this.userForm.valid){
      this.newUser(this.userForm.value);
    } 
    else{
      alert("Login Incorrecto!!");
    }
    console.log(this.userForm.value);
  }

}
