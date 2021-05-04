import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { ProjectnewComponent } from './access/projectnew/projectnew.component';
import { UserComponent } from './access/user/user.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DepartmentComponent } from './pages/department/department.component';

import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'aboutus', component: AboutusComponent},
    { path: 'contactus', component: ContactusComponent},
    { path: 'team', component: TeamComponent},
    { path: 'login', component: LoginComponent},
    { path: 'project', component: ProjectComponent},
    { path: 'project/:id', component: ProjectComponent},
    { path: 'department', component: DepartmentComponent},
    { path: 'department/:id', component: DepartmentComponent},
    { path: 'user', component: UserComponent},
    {path: 'newproject', component: ProjectnewComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}