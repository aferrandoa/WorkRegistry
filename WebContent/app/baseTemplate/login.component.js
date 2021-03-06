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
var router_1 = require('@angular/router');
var login_service_1 = require('./login.service');
var user_data_service_1 = require('../services/user-data.service');
var AppLogin = (function () {
    function AppLogin(router, loginService, userDataService) {
        this.router = router;
        this.loginService = loginService;
        this.userDataService = userDataService;
        this.onUserDataLoaded = new core_1.EventEmitter();
        this.user = "";
        this.password = "";
        this.mode = 'Observable';
        this.loginError = false;
    }
    AppLogin.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.login(this.user, this.password).subscribe(function (res) {
            _this.loginCallback(res);
            _this.getUserData(null);
        });
    };
    AppLogin.prototype.loginCallback = function (res) {
        if (res === 'true') {
            this.loginError = false;
            $('#loginModal').modal('hide');
            var link = ['/admin'];
            this.router.navigate(link);
        }
        else {
            this.loginError = true;
        }
    };
    AppLogin.prototype.getUserData = function (event) {
        var _this = this;
        this.userDataService.gteUserData().subscribe(function (res) {
            _this.onUserDataLoaded.emit(res);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AppLogin.prototype, "onUserDataLoaded", void 0);
    AppLogin = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'base-template-login',
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService, user_data_service_1.UserDataService])
    ], AppLogin);
    return AppLogin;
}());
exports.AppLogin = AppLogin;
//# sourceMappingURL=login.component.js.map