var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var WorkRegisterService = (function () {
    function WorkRegisterService(http, properties) {
        this.http = http;
        this.properties = properties;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.urlBase = 'workServices/workregister/';
        this.urlNewRegister = 'newregister.do';
        this.urlAllUserReg = "getAllUser.do";
    }
    WorkRegisterService.prototype.insertNewRegister = function (newregister) {
        var body = JSON.stringify(newregister);
        var options = new http_1.RequestOptions({ headers: this.headers });
        return this.http.put(this.properties.urlApi + this.urlBase + this.urlNewRegister, body, options)
            .catch(this.handleError);
    };
    WorkRegisterService.prototype.getAllRegisters = function () {
        return this.http.get(this.properties.urlApi + this.urlBase + this.urlAllUserReg)
            .map(this.extractData)
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
        core_1.Injectable()
    ], WorkRegisterService);
    return WorkRegisterService;
})();
exports.WorkRegisterService = WorkRegisterService;
//# sourceMappingURL=work-register.service.js.map