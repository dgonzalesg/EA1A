import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects = [];
  constructor(private readonly projectservice: ProjectService) {
    
   }

  getProject(){
    this.projectservice.getProject().subscribe((rest: any) => {
      console.log(rest.data);
      this.projects = rest.data;
    })
  }

  getProjects2(){
    const token = sessionStorage.getItem('token');
    const header = { Authorization : 'Bearer ' + token };
    const param = "";
    this.projectservice.getProjects(header, param).subscribe((rest:any) =>{
      console.log(rest);
      this.projects = rest.data;
    })
  }

  ngOnInit(): void {
   // this.getProject();
    this.getProjects2();
  }

}
