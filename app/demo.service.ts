/**
 * Created by yingdingwang on 8/15/16.
 */

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DemoService  {
    constructor(private http: Http) {}
    // URL to web API
    private demoUrl = 'http://httpbin.org/ip';

    getItems() : Observable<IPData> {
        return this.http.get(this.demoUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}

class IPData {
    public origin : string;
}