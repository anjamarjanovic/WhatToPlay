import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { observable, Observable } from "rxjs";

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err: any) => {
                console.log(err);
                return observableThrowError(err);
            })
        )

    }
}




function catchError(arg0: (err: any) => any): import("rxjs").OperatorFunction<HttpEvent<any>, HttpEvent<any>> {
    throw new Error("Function not implemented.");
}

function observableThrowError(err: any) {
    throw new Error("Function not implemented.");
}

