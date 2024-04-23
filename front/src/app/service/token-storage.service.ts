import {Injectable} from '@angular/core';
import { LoggedInUser } from '../models/Auth';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'userData';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }

  public saveToken(token: string): void {
    if(typeof window !== 'undefined' && window.localStorage){
      window.localStorage.removeItem(TOKEN_KEY);
    }
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken() {
    if(typeof window !== 'undefined' && window.localStorage){
      return localStorage.getItem(TOKEN_KEY);
    }
    return undefined;
  }

  public saveUser(user:any): void {
    if(typeof window !== 'undefined' && window.localStorage){
      localStorage.removeItem(USER_KEY);

    }
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUserId() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const userDataString = localStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        return userData.id;
      }
    }
    return undefined;
  }

  setLoggedInUser(userData: LoggedInUser) {
    if(localStorage.length){
      if (localStorage.getItem('userData') !== JSON.stringify(userData)) {
        localStorage.setItem('userData', JSON.stringify(userData));
      }
    }
  }


  logOut(): void {
    window.localStorage.clear();
    window.location.reload();
  }
}
