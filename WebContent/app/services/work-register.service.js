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
var WorkRegisterService = (function () {
    function WorkRegisterService(http, properties) {
        this.http = http;
        this.properties = properties;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.urlBase = 'workServices/workregister/';
        this.urlNewRegister = 'newregister.do';
        this.urlDeleteRegister = 'deleteRegister';
        this.urlAllUserReg = "getAllUser.do";
    }
    WorkRegisterService.prototype.insertNewRegister = function (newregister) {
        var body = JSON.stringify(newregister);
        var options = new http_1.RequestOptions({ headers: this.headers });
        return this.http.put(this.properties.urlApi + this.urlBase + this.urlNewRegister, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    WorkRegisterService.prototype.getAllRegisters = function () {
        return this.http.get(this.properties.urlApi + this.urlBase + this.urlAllUserReg)
            .map(this.extractData)
            .catch(this.handleError);
    };
    WorkRegisterService.prototype.deleteRegister = function (registerId) {
        return this.http.delete(this.properties.urlApi + this.urlBase + this.urlDeleteRegister + "/" + registerId + ".do")
            .catch(this.handleError);
    };
    WorkRegisterService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    WorkRegisterService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    WorkRegisterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, properties_1.Properties])
    ], WorkRegisterService);
    return WorkRegisterService;
}());
exports.WorkRegisterService = WorkRegisterService;
//# sourceMappingURL=work-register.service.js.map