import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'userData';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user:any): void {
    if(localStorage.length){
      localStorage.removeItem(USER_KEY);

    }
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUserId() {
    // Проверяем, существует ли объект window и localStorage в этом объекте
    if (typeof window !== 'undefined' && window.localStorage.length) {
      const userDataString = localStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        return userData.id;
      }
    }
    // Возвращаем undefined или другое подходящее значение, если localStorage не доступен
    return undefined;
  }


  logOut(): void {
    window.sessionStorage.clear();
    window.location.reload();
  }
}
