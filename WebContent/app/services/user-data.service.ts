import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { UserData } from '../vo/user-data';
import { Properties }   from '../properties';

@Injectable()
export class UserDataService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private urlBase = 'workServices/userData/';
    private urlGetUserData = 'getUserData.do';

    constructor(private http: Http,
                private properties: Properties) { }

    gteUserData(): Observable<UserData> {
        return this.http.get(this.properties.urlApi + this.urlBase + this.urlGetUserData)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = null;

        if(res.headers.get("content-type") !== "text/html"){
            body = res.json();
        }
        
        return body;
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
