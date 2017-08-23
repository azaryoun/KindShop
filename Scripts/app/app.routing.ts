
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/notFound.component';
import { LoginComponent } from './components/login.component';
import { Login2Component } from './components/login2.component';

//Services
import { AuthGuardService } from './services/authGuard.service';
//import { PreventUnsavedChangesGuardService } from './services/preventUnsavedChangesGaurd.service';

export const AppRouting = RouterModule.forRoot([
    
    { path: 'login', component: LoginComponent },
    { path: 'login2', component: Login2Component },
     {path: '', component: HomeComponent, canActivate: [AuthGuardService]
    },
    { path: '**', component: NotFoundComponent }

]);