
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SpotifyService } from './../services/spotify.service';
import { FormControl } from '@angular/forms';
import {Spotify} from './../models/spotify';

@Component({
    selector: 'spotify',
    templateUrl: 'html/modules/spotify/components/spotify.component.html',
    styles: [`.img {
        position: relative;
        float: left;
        width: 100px;
        height: 100px;
        background-position: 50% 50 %;
        background-repeat: no-repeat;
        background-size: cover;
        }
`]
})

export class SpotifyComponent {

    public searchControl = new FormControl();
    public isLoading: boolean = false;
    public artists = [];

    constructor(private _spotifyService: SpotifyService) { }

    ngOnInit() {
        this.searchControl.valueChanges
            .filter(text => text.length > 3)
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(value => {
                this.isLoading = true;
                this.artists = [];
                this._spotifyService.read(value)
                    .subscribe(data => {
                        this.isLoading = false;
                        this.artists = data.artists.items;
                    });
            });
    }


    public onRead(id: number) {
        this._spotifyService.read(id).subscribe(data => data);

    }

    public onInsert() {
        let objSpotify = new Spotify(
            2,
            "spotifyName",
            "spotifyAddress",
            67,
            true
        );



        this._spotifyService.create(objSpotify).subscribe(data => {
            objSpotify = data;
            console.log("Spotify " + objSpotify.id + " has been created.");
         
        });

        





    }

    public onUpdate(id: number): void {

        let objSpotify = new Spotify(
            2,
            "spotifyName",
            "spotifyAddress",
            67,
            true
        );


        this._spotifyService.update(id, objSpotify).subscribe(
            (data) => {
                objSpotify = data;
                console.log("Spotify " + objSpotify.id + " has been updated.");
            },
            (error) => console.log(error)
        );


    }


    public onDelete(id: number): void {

        this._spotifyService.delete(id).subscribe(
            (data) => {
                console.log("Spotify " + id.toString() + " has been deleted.");
            },
            (error) => console.log(error)
        );
    }

}