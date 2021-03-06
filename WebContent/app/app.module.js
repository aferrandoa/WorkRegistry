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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var header_component_1 = require('./baseTemplate/header.component');
var login_component_1 = require('./baseTemplate/login.component');
var login_service_1 = require('./baseTemplate/login.service');
var user_data_service_1 = require('./services/user-data.service');
var work_register_service_1 = require('./services/work-register.service');
var main_component_1 = require('./main/main.component');
var app_routing_1 = require('./app.routing');
var admin_module_1 = require('./admin/admin.module');
var properties_1 = require('./properties');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule, app_routing_1.routing, admin_module_1.AdminModule],
            declarations: [app_component_1.AppComponent, header_component_1.AppHeader, login_component_1.AppLogin, main_component_1.MainComponent],
            providers: [login_service_1.LoginService, user_data_service_1.UserDataService, work_register_service_1.WorkRegisterService, properties_1.Properties],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map