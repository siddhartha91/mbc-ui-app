import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from './../../types/UserLogin';
import { AuthService } from './../auth.service';
import { LoginResponse } from './../../types/LoginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: UserLogin = new UserLogin();
  loginResponse: any;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void { }

  isLoading: boolean = false;
  message: string = "";

  login() {
    // this.isLoading = true;
    // setTimeout(()=>{
    //   this.router.navigate(['/']);
    // })



    if (this.user.username != '' && this.user.password != '') {

      this.auth.loginAuth(this.user).subscribe((response) => {
        console.log('Response from API : ', response)
        this.loginResponse = response;
        console.log("LogIn REsponse ::", this.loginResponse);
        console.log("Sattus::", this.loginResponse.status);

        if (this.loginResponse.status === 200) {
          this.router.navigate(['/home']);
          localStorage.setItem("username",this.user.username)
        } else if (this.loginResponse.status === 401) {
          console.log("401 Incorrect");

          this.message = this.loginResponse.message;
        }else if (this.loginResponse.status === 403) {
          console.log("403 Account Locked");
          this.message = this.loginResponse.message;

        } else if (this.loginResponse.status === 404) {
          console.log("404 Not Found");
          this.message = this.loginResponse.message;

        } else {
          this.message = "500 Internal Server Error::";
        }
      });

      //   if (this.auth.isLoggedin()) {
      //     console.log('Login success!');

      //     this.isLoading = true;
      //     setTimeout(()=>{
      //       this.router.navigate(['/transactions/view']);
      //     }, 2000)
      //   }
      // } else {
      //   console.log('Login failed!');
      //   this.router.navigate(['login']);
      // }
    }
  }
}
