
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppSettings} from './../app.setting'
import {JWT} from './../models/JWT';

@Injectable()
export class Http2Service {

    constructor(private _http: Http) {

    }

    public get(url, opts = AppSettings.getRequestOptions()) {
        this.configureAuth(opts);
        return this._http.get(url, opts).map(
            response => {
                let strAccessToken = response.headers.get("Authorization");
                let oJWT = new JWT(strAccessToken);
                AppSettings.setAuth(oJWT);
                return response;
            }
        )
            .catch(AppSettings.handleError);
    }

    public post(url, data, opts = AppSettings.getRequestOptions()) {

        this.configureAuth(opts);


        return this._http.post(url, data, opts).map(
            response => {
                let strAccessToken = response.headers.get("Authorization");
                let oJWT = new JWT(strAccessToken);
                AppSettings.setAuth(oJWT);
                return response;
            }
        )
            .catch(AppSettings.handleError)

        
    }

    public put(url, data, opts = AppSettings.getRequestOptions()) {
        this.configureAuth(opts);
        return this._http.put(url, data, opts).map(
            response => {
                let strAccessToken = response.headers.get("Authorization");
                let oJWT = new JWT(strAccessToken);
                AppSettings.setAuth(oJWT);
                return response;
            }
        )
            .catch(AppSettings.handleError);
    }

    public delete(url, opts = AppSettings.getRequestOptions()) {
        this.configureAuth(opts);
        return this._http.delete(url, opts).map(
            response => {
                let strAccessToken = response.headers.get("Authorization");
                let oJWT = new JWT(strAccessToken);
                AppSettings.setAuth(oJWT);
                return response;
            }
        )
            .catch(AppSettings.handleError);
    }

    private configureAuth(opts: any) {
        let jWT = AppSettings.getAuth();
        if (jWT != null && jWT.accessToken != null) {
            if (opts.headers == null) {
                opts.headers = new Headers();
            }
            opts.headers.set("Authorization", `Bearer${jWT.accessToken}`);
        }
    }



}
