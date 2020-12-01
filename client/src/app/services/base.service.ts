import { UtilityService } from './utility/utility.service';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as moment from 'moment';
export class BaseService {

    private API_URL = 'http://pi.nathangawith.com:4300/api/v1';

    constructor(
        private http: HttpClient,
        public utilityService: UtilityService,
    ) { }

    private getURL(path: string): string {
        return `${this.API_URL}${path}`;
    }

    private mapDates<T>(obj: T): T {
        const replaceDate = x => {
            if (x.date) {
                x.date = this.utilityService.formatMomentToString(moment(x.date));
            }
            return x;
        };
        if (obj) {
            // tslint:disable-next-line:no-string-literal
            if (obj['map']) {
                // tslint:disable-next-line:no-string-literal
                obj = obj['map'](x => replaceDate(x));
            } else {
                obj = replaceDate(obj);
            }
        }
        return obj;
    }

    private pipe<T>(observable: Observable<T>): Observable<T> {
        return observable.pipe(
            map(resp => this.mapDates(resp)),
            delay(0)
        );
    }

    public httpGet<T>(path: string): Observable<T> {
        return this.pipe(this.http.get<T>(this.getURL(path)));
    }

    public httpPost<T>(path: string, body: any): Observable<T> {
        body = this.mapDates(body);
        return this.pipe(this.http.post<T>(this.getURL(path), body));
    }

    public httpPut<T>(path: string, body: any): Observable<T> {
        body = this.mapDates(body);
        return this.pipe(this.http.put<T>(this.getURL(path), body));
    }

    public httpDelete<T>(path: string): Observable<T> {
        return this.pipe(this.http.delete<T>(this.getURL(path)));
    }

}
