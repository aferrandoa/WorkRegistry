import { TestBed, getTestBed, async, inject } from '@angular/core/testing';
import { Headers, BaseRequestOptions, Response, HttpModule, Http, XHRBackend, RequestMethod, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import 'rxjs/Rx';

import { UserDataService } from './user-data.service'
import { UserData } from '../vo/user-data'
import { Properties } from '../properties'

describe('User data Service', () => {

    let mockBackend: MockBackend;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                UserDataService,
                MockBackend,
                BaseRequestOptions,
                Properties,
                {
                    provide: Http,
                    useFactory:
                    (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions],
                }
            ],
            imports: [
                HttpModule
            ]
        });

        getTestBed().compileComponents();
        mockBackend = getTestBed().get(MockBackend);
    }));

    it('should get user data',  async(inject([MockBackend, UserDataService], (mockBackend, userDataService) => {
        mockBackend.connections.subscribe(
            (connection: MockConnection) => {
                connection.mockRespond(new Response(
                    new ResponseOptions({
                        headers: new Headers([{ name: 'content-type', value: 'text/html'}]),
                        body:
                        {
                            cdemployee: '000000001',
                        }
                    }
                    )));
            });

        expect(userDataService).toBeDefined();

        userDataService.gteUserData().subscribe((response: UserData) => {
            expect(response.cdemployee).toEqual('000000001');
        });
    })));

});  