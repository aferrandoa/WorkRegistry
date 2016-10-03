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
var LoginService = (function () {
    function LoginService(http, properties) {
        this.http = http;
        this.properties = properties;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.loginUrl = 'perform_login';
        this.logoutUrl = 'perform_logout';
        this.checkUrl = "securityServices/checkAutheticated.do";
        this.isLoggedIn = false;
        this.redirectUrl = "";
    }
    LoginService.prototype.initialization = function () {
        var _this = this;
        return this.http.get(this.properties.urlApi + this.checkUrl)
            .map(function (res) {
            if (res.text() !== "true") {
                _this.isLoggedIn = false;
                return 'false';
            }
            _this.isLoggedIn = true;
            return 'true';
        })
            .catch(this.handleError);
    };
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var body = 'username=' + username + '&password=' + password;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.properties.urlApi + this.loginUrl, body, options)
            .map(function (res) {
            if (res.text().length > 0) {
                return 'false';
            }
            _this.isLoggedIn = true;
            return 'true';
        })
            .catch(this.handleError);
    };
    LoginService.prototype.logout = function () {
        var _this = this;
        return this.http.post(this.properties.urlApi + this.logoutUrl, "")
            .map(function (res) {
            _this.isLoggedIn = false;
            return true;
        })
            .catch(this.handleError);
    };
    LoginService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, properties_1.Properties])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map