import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from './../types/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public http: HttpClient) { }

  authUrl = 'http://localhost:4040';

  public login(user: UserLogin) {
    localStorage.setItem("username",user.username);
    localStorage.setItem("password",user.password);
  }

  public isLoggedin(){
    let username = localStorage.getItem("username");
    if(username=='' || username==null || username==undefined){
      return false;
    }else{
      return true;
    }
  }

  public logout(){
    localStorage.removeItem("username");
    return true;
  }


  public loginAuth(logInEntity : UserLogin){
    console.info('form data : ',logInEntity);
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(localStorage.getItem("username") + ':' + localStorage.getItem("password")) });
    return this.http.post('http://localhost:4041/mcb/auth/login' ,  logInEntity);
  }


}
