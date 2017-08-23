///<reference path="../../../../typings/index.d.ts"/>

// Import Modules:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

//Import Module Loader
import "rxjs/Rx";

// Import Components:
import {SpotifyComponent} from './components/spotify.component';
import {ArtistComponent} from './components/artist.component';



// Import Services: note: Services in ng2 are SINGLE TONE and with bootstraping will be creaed
import {SpotifyService} from './services/spotify.service'

// Import Pipes:
//import {TruncatePipe} from './pipes/truncate.pipe';

//Import Routings:



@NgModule({
    // directives, components, and pipes
    declarations: [
        SpotifyComponent,
        ArtistComponent
    ],

    // modules & Routing
    imports: [
        HttpModule,
        RouterModule,
        ReactiveFormsModule,
        CommonModule,
    ],
    // providers (Services:SingleTon) in order to use built in Ng2 Dependency Injection
    providers: [
        SpotifyService,
    ]
    //The components used in routing process
    , exports: [
        SpotifyComponent,
        ArtistComponent
    ]

    
})
export class SpotifyModule { }