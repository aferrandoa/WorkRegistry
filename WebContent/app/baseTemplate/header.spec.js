/// <reference path="../../typings/index.d.ts"/>
"use strict";
var header_component_1 = require('./header.component');
var testing_1 = require('@angular/core/testing');
describe('Header component', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                header_component_1.AppHeader
            ]
        });
        testing_1.TestBed.compileComponents();
    }));
    it('should render \'Work Register\'', function () {
        var fixture = testing_1.TestBed.createComponent(header_component_1.AppHeader);
        fixture.detectChanges();
        var footer = fixture.nativeElement;
        expect(footer.querySelector('a').textContent.trim()).toBe('Work Register');
    });
});
//# sourceMappingURL=header.spec.js.map