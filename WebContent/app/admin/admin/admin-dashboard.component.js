var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var work_register_1 = require('../vo/work-register');
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
        })
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
})();
exports.AdminDashboardComponent = AdminDashboardComponent;
//# sourceMappingURL=admin-dashboard.component.js.map