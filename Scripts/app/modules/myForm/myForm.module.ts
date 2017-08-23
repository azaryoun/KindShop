///<reference path="../../../../typings/index.d.ts"/>

// Import Modules:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Import Module Loader
import "rxjs/Rx";

// Import Components:
import { TemplateDrivenFormComponent } from './components/templateDrivenForm.component';



// Import Services: note: Services in ng2 are SINGLE TONE and with bootstraping will be creaed

// Import Pipes:
//import {TruncatePipe} from './pipes/truncate.pipe';

//Import Routings:



@NgModule({
    // directives, components, and pipes
    declarations: [
        TemplateDrivenFormComponent
    ],

    // modules & Routing
    imports: [
        CommonModule,
        FormsModule
    ],
    // providers (Services:SingleTon) in order to use built in Ng2 Dependency Injection
    providers: [

    ]
    , exports: [
        TemplateDrivenFormComponent
    ]

})
export class MyFormModule { }