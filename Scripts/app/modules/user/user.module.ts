///<reference path="../../../../typings/index.d.ts"/>

// Import Modules:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//Import Module Loader
import "rxjs/Rx";

// Import Components:
import {UserFormComponent} from './components/userForm.component';



// Import Services: note: Services in ng2 are SINGLE TONE and with bootstraping will be creaed

// Import Pipes:
//import {TruncatePipe} from './pipes/truncate.pipe';

//Import Routings:



@NgModule({
    // directives, components, and pipes
    declarations: [
        UserFormComponent
    ],

    // modules & Routing
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    // providers (Services:SingleTon) in order to use built in Ng2 Dependency Injection
    providers: [
        
    ]
    , exports: [
        UserFormComponent
    ]
    
})
export class UserModule { }