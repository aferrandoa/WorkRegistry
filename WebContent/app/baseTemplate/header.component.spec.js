"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var header_component_1 = require('./header.component');
var login_component_1 = require('./login.component');
var login_service_1 = require('./login.service');
var user_data_service_1 = require('../services/user-data.service');
var user_data_1 = require('../vo/user-data');
var comp;
var fixture;
var de;
var el;
var RouterStub = (function () {
    function RouterStub() {
    }
    RouterStub.prototype.navigateByUrl = function (url) { return url; };
    return RouterStub;
}());
var userDataServiceStub = {
    gteUserData: function () {
        return Observable_1.Observable.of(new user_data_1.UserData());
    }
};
var loginServiceStub = {
    initialization: function () {
        return Observable_1.Observable.of(true);
    },
    isLoggedIn: true
};
describe('BannerComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [header_component_1.AppHeader, login_component_1.AppLogin],
            imports: [forms_1.FormsModule],
            providers: [
                { provide: login_service_1.LoginService, useValue: loginServiceStub },
                { provide: user_data_service_1.UserDataService, useValue: userDataServiceStub },
                { provide: router_1.Router, useClass: RouterStub }
            ]
        }).compileComponents(); // compile template and css
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(header_component_1.AppHeader);
        comp = fixture.componentInstance; // BannerComponent test instance
    });
    it('should display original title', function () {
        de = fixture.debugElement.query(platform_browser_1.By.css('a'));
        el = de.nativeElement;
        fixture.detectChanges();
        expect(el.textContent).toContain('Work Register');
    });
});
//# sourceMappingURL=header.component.spec.js.map