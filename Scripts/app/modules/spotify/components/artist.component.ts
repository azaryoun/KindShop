import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'html/modules/spotify/components/artist.component.html'
})
export class ArtistComponent  implements OnInit,OnDestroy {
    public id;
    public name;
  //  public subscription;

    constructor(private _route: ActivatedRoute){
    }
    ngOnInit(){
        this._route.params.subscribe(params => {
            this.id = params["id"];
            this.name = params["name"];
        })
    }

    ngOnDestroy() {
       // this.subscription.unsubscribe();
    }

}