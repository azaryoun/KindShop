import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './components/userForm.component';

//Services
import { AuthGuardService } from './../../services/authGuard.service';


export const UserRouting = RouterModule.forChild([
    { path: 'signup', component: UserFormComponent, canActivate: [AuthGuardService] }
]);


