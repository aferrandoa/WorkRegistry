import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Properties }   from '../properties';

@Injectable()
export class LoginService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private loginUrl = 'perform_login';
    private logoutUrl = 'perform_logout';
    private checkUrl="securityServices/checkAutheticated.do"
    isLoggedIn: boolean = false;
  	redirectUrl: String = "";
  
    constructor(private http: Http,
    	private properties: Properties) { }

	initialization(): Observable<boolean>{
		return this.http.get(this.properties.urlApi + this.checkUrl)
            .map(res => {
                if (res.text() !== "true") {
                    this.isLoggedIn = false;
                    return 'false';
                }

				this.isLoggedIn = true;
                return 'true';
            })
            .catch(this.handleError);
	}

    login(username: String, password: String): Observable<String> {
        let body = 'username=' + username + '&password=' + password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.properties.urlApi + this.loginUrl, body, options)
            .map(res => {
                if (res.text().length > 0) {
                    return 'false';
                }

				this.isLoggedIn = true;
                return 'true';
            })
            .catch(this.handleError);
    }
    
    logout(): Observable<String>{
    	return this.http.post( this.properties.urlApi + this.logoutUrl, "")
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