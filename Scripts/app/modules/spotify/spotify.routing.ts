

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyComponent } from './components/spotify.component';
import { ArtistComponent } from './components/artist.component';


export const SpotifyRouting = RouterModule.forChild([
    { path: 'spotify', component: SpotifyComponent },
    { path: 'spotify/artist/:id/:name', component: ArtistComponent }
]);