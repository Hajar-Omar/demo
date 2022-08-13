import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from 'src/app/services/login-logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private loginLogoutService: LoginLogoutService) {
    this.loginLogoutService.loginChange.subscribe((value) => {
      this.isLogin = value;
    });
  }

  ngOnInit(): void {
    this.isLogin = this.loginLogoutService.isLogin;
  }

  login() {
    this.loginLogoutService.loginUser();
  }
  logout() {
    this.loginLogoutService.logoutUser();
  }
}
