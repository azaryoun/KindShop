///<reference path="../../typings/index.d.ts"/>

// Import Modules:
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms'; //Template Driven Forms
import { ReactiveFormsModule } from '@angular/forms'; // Model Driven Forms
import { MaterialModule } from '@angular/material'; //Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// User defined Modules:
import { SpotifyModule } from "./modules/spotify/spotify.module";
import { UserModule } from "./modules/user/user.module";
import { MyFormModule } from "./modules/myForm/myForm.module";


//Import Module Loader
import "rxjs/Rx";

// Material Design Requirement
import 'hammerjs';


// Import Components:
import { AppComponent } from "./components/app.component";
import { ProductComponent } from "./components/product.component";
import { Product2Component } from "./components/product2.component";
import { ProductsComponent } from "./components/products.component";
import { RatingComponent } from './components/rating.component';
import { JumboTronComponent } from './components/jumboTron.component';
import { ObservableComponent } from './components/observable.component';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/notFound.component';
import { LoginComponent } from './components/login.component';
import { Login2Component } from './components/login2.component';

import { CheckboxConfigurableExample } from './components/checkbox.component';



// Import Services: note: Services in ng2 are SINGLE TONE and with bootstraping will be creaed
import { ProductService } from './services/product.service';
import { Product2Service } from './services/product2.service';
import { LoginService } from './services/login.service';
import { Http2Service } from './services/http2.service';
import { AuthGuardService } from './services/authGuard.service';
//import {PreventUnsavedChangesGuardService } from './services/preventUnsavedChangesGaurd.service';


// Import Pipes:
import { TruncatePipe } from './pipes/truncate.pipe';

//Import Routings:
import { AppRouting } from "./app.routing";
import { SpotifyRouting } from "./modules/spotify/spotify.routing";
import { UserRouting } from "./modules/user/user.routing";

@NgModule({
    // directives, components, and pipes
    declarations: [
        AppComponent,
        ProductComponent,
        RatingComponent,
        Product2Component,
        ProductsComponent,
        TruncatePipe,
        JumboTronComponent,
        ObservableComponent,
        HomeComponent,
        LoginComponent,
        Login2Component,
        NotFoundComponent,
        CheckboxConfigurableExample
    ],

    // modules & Routing
    imports: [
        // Angular Common Modules
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule.forRoot(),
        BrowserAnimationsModule,
        // User Defined Modules

        SpotifyModule,
        UserModule,
        MyFormModule,

        // User Defined Routings

        SpotifyRouting,
        UserRouting,

        // Main Routing
        AppRouting
    ],
    // providers (Services:SingleTon) in order to use built in Ng2 Dependency Injection
    providers: [
        ProductService,
        Product2Service,
        AuthGuardService,
        //  PreventUnsavedChangesGuardService,
        Http2Service,
        LoginService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }



