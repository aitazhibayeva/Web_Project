import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoggedInUser, UserCredentials} from "../models/Auth";
import {User} from "../models/User";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }



  logIn(user:UserCredentials): Observable<any> {
    return this.http.post(
      'http://127.0.0.1:8000/api-user-login/', {
        username:user.username,
        password: user.password
      }
    );
  }


  setLoggedInUser(userData: LoggedInUser) {
    if(localStorage.length){
      if (localStorage.getItem('userData') !== JSON.stringify(userData)) {
        localStorage.setItem('userData', JSON.stringify(userData));
      }
    }
  }

  registerUser(user:any) {
    
    return this.http.post<any>('http://localhost:8000/sign-up/', user);
  }
}
