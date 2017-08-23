
import {Response} from "@angular/http";

import {Http2Service} from "./../../../services/http2.service";

import {Injectable } from "@angular/core";

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';


import {AppSettings} from './../../../app.setting';

import {Spotify} from './../models/spotify';


@Injectable()
export class SpotifyService {

    private _serviceUrl = 'Spotify/';

    constructor(private _http: Http2Service) {
        this._serviceUrl = AppSettings.SERVER_IP + this._serviceUrl;
    }

    public create(spotify: Spotify) {
        let strUrl = this._serviceUrl;



        return this._http.post(strUrl, JSON.stringify(spotify),
            AppSettings.getRequestOptions())
            .map(response => response.json());

    }

    //public read(criteria: string) {
    //    // let strUrl: string = "https://api.spotify.com/v1/search?type=artist&q=" + criteria;

    //    let strUrl = this._serviceUrl + 'search?type=artist&q=' + criteria;

    //    return this._http.get(strUrl,
    //        AppSettings.getRequestOptions())
    //        .map(res => res.json())
    //}


    public read(id: number) {

        let strUrl = this._serviceUrl + id.toString();

        return this._http.get(strUrl,
            AppSettings.getRequestOptions())
            .map(response => response.json());

    }


    public update(id: number, spotify: Spotify) {

        let strUrl = this._serviceUrl + id.toString();

        return this._http.put(strUrl, JSON.stringify(spotify),
            AppSettings.getRequestOptions())
            .map(response => response.json())
           
    }

    public delete(id: number) {

        let strUrl = this._serviceUrl + id.toString();
        return this._http.delete(strUrl)
           
    }

}