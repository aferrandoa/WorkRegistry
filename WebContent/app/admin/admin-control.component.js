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
var properties_1 = require('../properties');
var ng2_file_upload_1 = require('ng2-file-upload');
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var URL = 'workServices/fileServices/upload.do';
var AdminControlComponent = (function () {
    function AdminControlComponent(properties) {
        this.properties = properties;
        this.entryText = "";
        this.uploader = new ng2_file_upload_1.FileUploader({});
    }
    AdminControlComponent.prototype.handleUpload = function (event) {
        var CSRFValue = ng2_cookies_1.Cookie.get('XSRF-TOKEN');
        this.uploader.options.headers = [{ name: 'x-xsrf-token', value: CSRFValue }];
        this.uploader.options.disableMultipart = false;
        this.uploader.uploadAll();
    };
    AdminControlComponent.prototype.ngOnInit = function () {
        $('#summernote').summernote({
            height: 300
        });
        this.uploader.options.url = this.properties.urlApi + URL;
    };
    AdminControlComponent.prototype.save = function () {
        var entryText = $('#summernote').summernote('code');
    };
    ;
    AdminControlComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-adminControl',
            templateUrl: 'admin-control.component.html'
        }), 
        __metadata('design:paramtypes', [properties_1.Properties])
    ], AdminControlComponent);
    return AdminControlComponent;
}());
exports.AdminControlComponent = AdminControlComponent;
//# sourceMappingURL=admin-control.component.js.map