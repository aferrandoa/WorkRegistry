"use strict";
var testing_1 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var testing_2 = require('@angular/http/testing');
require('rxjs/Rx');
var user_data_service_1 = require('./user-data.service');
var properties_1 = require('../properties');
describe('User data Service', function () {
    var mockBackend;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                user_data_service_1.UserDataService,
                testing_2.MockBackend,
                http_1.BaseRequestOptions,
                properties_1.Properties,
                {
                    provide: http_1.Http,
                    useFactory: function (backend, defaultOptions) {
                        return new http_1.Http(backend, defaultOptions);
                    },
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions],
                }
            ],
            imports: [
                http_1.HttpModule
            ]
        });
        testing_1.getTestBed().compileComponents();
        mockBackend = testing_1.getTestBed().get(testing_2.MockBackend);
    }));
    it('should get user data', testing_1.async(testing_1.inject([testing_2.MockBackend, user_data_service_1.UserDataService], function (mockBackend, userDataService) {
        mockBackend.connections.subscribe(function (connection) {
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                headers: new http_1.Headers([{ name: 'content-type', value: 'text/html' }]),
                body: {
                    cdemployee: '000000001',
                }
            })));
        });
        expect(userDataService).toBeDefined();
        userDataService.gteUserData().subscribe(function (response) {
            expect(response.cdemployee).toEqual('000000001');
        });
    })));
});
//# sourceMappingURL=user-data.service.spec.js.map