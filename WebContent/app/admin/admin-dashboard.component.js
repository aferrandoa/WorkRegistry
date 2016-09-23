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
var work_register_1 = require('../vo/work-register');
var work_register_service_1 = require('../services/work-register.service');
var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(workRegisterService) {
        this.workRegisterService = workRegisterService;
        this.workRegistersList = [];
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workRegisterService.getAllRegisters().subscribe(function (res) {
            _this.workRegistersList = res;
        });
    };
    AdminDashboardComponent.prototype.onSubmit = function () {
        var _this = this;
        var newElement = new work_register_1.WorkRegister(this.client, this.location, this.date, this.startTime);
        this.workRegisterService.insertNewRegister(newElement).subscribe(function (res) {
            _this.workRegistersList.push(newElement);
        });
    };
    AdminDashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-adminDashboard',
            templateUrl: 'admin-dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [work_register_service_1.WorkRegisterService])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());
exports.AdminDashboardComponent = AdminDashboardComponent;
//# sourceMappingURL=admin-dashboard.component.js.map