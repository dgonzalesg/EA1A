import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient) { }

  getProject(){
    //return this.http.get('http://localhost:4000/api/project/GetProject');
    return this.http.get('/api/project/GetProject');
  }

  getProjects(headers, params){
    return this.http.get('https://localhost:44309/api/Project/getprojects' + params,{ headers });
  }

  newProject(dataProject, headers){
    return this.http.post<any>('https://localhost:44309/api/Project/newProject',dataProject, {headers});
  }
 
}
