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
var common_1 = require('@angular/common');
var admin_component_1 = require('./admin.component');
var admin_dashboard_component_1 = require('./admin-dashboard.component');
var admin_control_component_1 = require('./admin-control.component');
var forms_1 = require('@angular/forms');
var ng2_datetime_picker_1 = require('ng2-datetime-picker');
var ng2_file_upload_1 = require('ng2-file-upload');
var admin_routing_1 = require('./admin.routing');
var auth_guard_service_1 = require('../auth-guard.service');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                admin_routing_1.adminRouting,
                ng2_datetime_picker_1.Ng2DatetimePickerModule,
                ng2_file_upload_1.FileUploadModule
            ],
            declarations: [
                admin_component_1.AdminComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
                admin_control_component_1.AdminControlComponent
            ],
            providers: [auth_guard_service_1.AuthGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map