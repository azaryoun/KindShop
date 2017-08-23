import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'html/components/home.component.html'
})
export class HomeComponent {
    constructor(private _router: Router) {
    }
    onClick() {
        this._router.navigate(['signup']);
    }

}