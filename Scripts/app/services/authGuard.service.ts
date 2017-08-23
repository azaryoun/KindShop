import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        private _router: Router) {
    }
    canActivate() {
        //if (this._accountService.isLoggedIn)
        //    return true;
        //// imperative navigation
        //this._router.navigate(['login'])
        return false;
    }
}