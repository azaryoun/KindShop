import {Component} from "@angular/core";

import { Router } from '@angular/router';

import {AppSettings} from "./../app.setting"


@Component({
    selector: "app",
    templateUrl: "html/components/app.component.html"
})
export class AppComponent {
    public title: string = 'My Second Angular App K';
    public imageUrl: string = '/images/garden_cart.png';
    public isActive: boolean = true;

    public isLoggedIn(): boolean {
        return (AppSettings.isLoggedIn());
    }

    public onClick($event): void {
        console.log("Clicked !", $event);
    }



    constructor(private _router: Router) { }

    public SignOut() {
        AppSettings.logout();
        this._router.navigate(['login'])
    }
}