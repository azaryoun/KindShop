
import {Http,Response} from "@angular/http";


import {Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';


import {AppSettings} from "./../app.setting"

import {LoginData} from  "./../models/loginData";
import {JWT} from  "./../models/JWT";

@Injectable()
export class LoginService {

    private _serviceUrl = 'Login/';

    constructor(private _http: Http) {
        this._serviceUrl = AppSettings.SERVER_IP + this._serviceUrl;
    }

    public login(loginData: LoginData) {


        let strUrl = this._serviceUrl + 'Login/'


        return this._http.post(strUrl, JSON.stringify(loginData),
            AppSettings.getRequestOptions())
            .map(response => {
                let jWT: JWT = response.json();
                AppSettings.setAuth(jWT);
                return jWT;
            })
            .catch(AppSettings.handleError);

    }

}