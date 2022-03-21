import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                'x-rapidapi-key': '6cc053b73amsh17071ec2b48c4b1p1cd4c9jsn32f8fe50f671'
            },
            setParams: {
                key: '08b226db465a4351a91e665b6a04cff5'
            }
        });
        return next.handle(req)
    }
}