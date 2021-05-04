import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projectnew',
  templateUrl: './projectnew.component.html',
  styleUrls: ['./projectnew.component.css']
})
export class ProjectnewComponent implements OnInit {

  projectForm = this.fb.group({
    Nombre: ['', [Validators.required]],
    Precio: ['', Validators.required],
    Direccion: ['', Validators.required],
    Ubicacion: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private readonly projectService: ProjectService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  newProject(dataProject){
    const token = sessionStorage.getItem('token');
    console.log(token);
    const header = { Authorization : 'Bearer ' + token };
    this.projectService.newProject(dataProject, header).subscribe((rest:any) =>{
      if(rest.isSucess){
        alert("Usuario Creado con ID : " + rest.data.id + " Nombre: " + rest.data.nombre);
        this.router.navigate(['login'])
      }else{
        alert("Credenciales Invalidas");
      }
    });
  }

  onSubmit(){
    if(this.projectForm.valid){
      this.newProject(this.projectForm.value);
    } 
    else{
      alert("Registro Incorrecto!!");
    }
    console.log(this.projectForm.value);
  }

}
