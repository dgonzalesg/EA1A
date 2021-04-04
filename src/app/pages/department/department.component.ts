import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  apartments = [];

  constructor(
    private readonly apartmentService: ApartmentService,
    private activeRoute: ActivatedRoute,
  ) { }

  getApartmentById(id: number){
    this.apartmentService.getApartment().subscribe((rest: any)=>{
      this.apartments = rest.data.filter((item:{id: number})=> item.id == id);
      console.log(this.apartments);
    })
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) =>{
      if(params.id){
        this.getApartmentById(params.id);
      }
    })
  }

}
