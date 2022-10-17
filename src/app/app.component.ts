import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){}

  title = 'mbc-ui-app';
  public isLoggedin(){
    let username = localStorage.getItem("username");
    if(username=='' || username==null || username==undefined){
      return false;
    }else{
      console.log('logged in!')
      return true;
    }
  }


  public logout(){
    localStorage.removeItem("username");
    this.router.navigate([''])
  }

}
