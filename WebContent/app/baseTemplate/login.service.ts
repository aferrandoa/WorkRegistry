import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class LoginService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private loginUrl = 'perform_login';
    private logoutUrl = 'perform_logout';
    isLoggedIn: boolean = false;
  	redirectUrl: String = "";
  
    constructor(private http: Http) { }

    login(username: String, password: String): Observable<String> {
        let body = 'username=' + username + '&password=' + password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.loginUrl, body, options)
            .map(res => {
                if (res.url.indexOf('error') !== -1) {
                    return 'false';
                }

				this.isLoggedIn = true;
                return 'true';
            })
            .catch(this.handleError);
    }
    
    logout(): Observable<String>{
    	return this.http.post(this.logoutUrl, "")
    		.map(res => {
    			this.isLoggedIn = false;
    			return true;
    		})
    		.catch(this.handleError);
	}

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}