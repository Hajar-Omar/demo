import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginLogoutService {
  isLogin = false;
  loginChange = new BehaviorSubject(false);

  constructor() {
    this.loginChange.subscribe((value) => {
      this.isLogin = value;
    });
    let loginState = localStorage.getItem('loginState');
    this.loginChange.next(!!loginState);
  }
  dummyAuth(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLogin);
      }, 500);
    });
    return promise;
  }

  loginUser() {
    this.loginChange.next(true);
    localStorage.setItem('loginState', 'true');
  }

  logoutUser() {
    this.loginChange.next(false);
    localStorage.setItem('loginState', '');
  }
}
