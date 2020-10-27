import { MatSnackBar } from '@angular/material';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private snackBar: MatSnackBar
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errorMsg = '';
                    if (error.error instanceof ErrorEvent) {
                        console.error('this is client side error');
                        errorMsg = `Error: ${error.error.message}`;
                    } else {
                        console.error('this is server side error');
                        errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                        this.snackBar.open(errorMsg, '', { duration: 5000 });
                    }
                    console.error(errorMsg);
                    return throwError(errorMsg);
                })
            );
    }
}
