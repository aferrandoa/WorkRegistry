"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var properties_1 = require('../properties');
var UserDataService = (function () {
    function UserDataService(http, properties) {
        this.http = http;
        this.properties = properties;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.urlBase = 'workServices/userData/';
        this.urlGetUserData = 'getUserData.do';
    }
    UserDataService.prototype.gteUserData = function () {
        return this.http.get(this.properties.urlApi + this.urlBase + this.urlGetUserData)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserDataService.prototype.extractData = function (res) {
        var body = null;
        if (res.headers.get("content-type") !== "text/html") {
            body = res.json();
        }
        return body;
    };
    UserDataService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    UserDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, properties_1.Properties])
    ], UserDataService);
    return UserDataService;
}());
exports.UserDataService = UserDataService;
//# sourceMappingURL=user-data.service.js.map