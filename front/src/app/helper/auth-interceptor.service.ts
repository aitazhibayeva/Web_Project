import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {TokenStorageService} from '../service/token-storage.service';
import {Observable} from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> | any {

    if (typeof window !== 'undefined' && window.localStorage.length) {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      if (userData.token) {
        req = req.clone({
          setHeaders: {
            Authorization: `Token ${userData.token}`
          }
        });
      }
    }
    return next.handle(req);

    
  }
}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
];
