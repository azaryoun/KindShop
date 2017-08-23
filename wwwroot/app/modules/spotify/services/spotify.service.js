System.register(["./../../../services/http2.service","@angular/core","rxjs/add/operator/map","./../../../app.setting"],function(exports_1,context_1){"use strict";var http2_service_1,core_1,app_setting_1,SpotifyService,__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};context_1&&context_1.id;return{setters:[function(http2_service_1_1){http2_service_1=http2_service_1_1},function(core_1_1){core_1=core_1_1},function(_1){},function(app_setting_1_1){app_setting_1=app_setting_1_1}],execute:function(){SpotifyService=function(){function SpotifyService(_http){this._http=_http,this._serviceUrl="Spotify/",this._serviceUrl=app_setting_1.AppSettings.SERVER_IP+this._serviceUrl}return SpotifyService.prototype.create=function(spotify){var strUrl=this._serviceUrl;return this._http.post(strUrl,JSON.stringify(spotify),app_setting_1.AppSettings.getRequestOptions()).map(function(response){return response.json()})},SpotifyService.prototype.read=function(id){var strUrl=this._serviceUrl+id.toString();return this._http.get(strUrl,app_setting_1.AppSettings.getRequestOptions()).map(function(response){return response.json()})},SpotifyService.prototype.update=function(id,spotify){var strUrl=this._serviceUrl+id.toString();return this._http.put(strUrl,JSON.stringify(spotify),app_setting_1.AppSettings.getRequestOptions()).map(function(response){return response.json()})},SpotifyService.prototype.delete=function(id){var strUrl=this._serviceUrl+id.toString();return this._http.delete(strUrl)},SpotifyService}(),SpotifyService=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http2_service_1.Http2Service])],SpotifyService),exports_1("SpotifyService",SpotifyService)}}});
//# sourceMappingURL=spotify.service.js.map