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
var login_component_1 = require('./login.component');
var login_service_1 = require('./login.service');
var AppHeader = (function () {
    function AppHeader(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    AppHeader.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.initialization().subscribe(function (res) {
            _this.loginComponent.getUserData(null);
        });
    };
    AppHeader.prototype.clickLogout = function (event) {
        var _this = this;
        this.loginService.logout().subscribe(function (res) {
            _this.userData = null;
            var link = [''];
            _this.router.navigate(link);
        });
    };
    AppHeader.prototype.checkUserData = function () {
        if (this.userData != null && this.userData != undefined) {
            return true;
        }
        return false;
    };
    AppHeader.prototype.navAdmin = function (event) {
        var link = ['/admin'];
        this.router.navigate(link);
    };
    AppHeader.prototype.onUserDataLoaded = function (data) {
        this.userData = data;
    };
    __decorate([
        core_1.ViewChild(login_component_1.AppLogin), 
        __metadata('design:type', login_component_1.AppLogin)
    ], AppHeader.prototype, "loginComponent", void 0);
    AppHeader = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'base-template-header',
            templateUrl: 'header.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
    ], AppHeader);
    return AppHeader;
}());
exports.AppHeader = AppHeader;
//# sourceMappingURL=header.component.js.map