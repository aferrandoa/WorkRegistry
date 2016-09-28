import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { WorkRegister } from '../vo/work-register'
import { Properties }   from '../properties';

@Injectable()
export class WorkRegisterService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private urlBase = 'workServices/workregister/';
    private urlNewRegister = 'newregister.do';
    private urlDeleteRegister = 'deleteRegister';
    private urlAllUserReg = "getAllUser.do";

    constructor(private http: Http,
                private properties: Properties) { }

    insertNewRegister(newregister: WorkRegister): Observable<WorkRegister> {
    	let body = JSON.stringify( newregister );
	    let options = new RequestOptions({ headers: this.headers });
    	
        return this.http.put(this.properties.urlApi + this.urlBase + this.urlNewRegister, body, options)
            .map(res => <WorkRegister> res.json())
            .catch(this.handleError);
    }
    
    getAllRegisters(): Observable<WorkRegister[]> {
        return this.http.get(this.properties.urlApi + this.urlBase + this.urlAllUserReg)
        	.map(this.extractData)
            .catch(this.handleError);
    }

    deleteRegister(registerId: Number): Observable<String> {
        return this.http.delete(this.properties.urlApi + this.urlBase + this.urlDeleteRegister + "/" + registerId + ".do")
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
