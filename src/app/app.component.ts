import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserAccessService} from './Services/user-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isProfileMenuShow = false;
constructor(private route:Router, private userAccessService:UserAccessService){
  this.isProfileMenuShow = localStorage.getItem("UserData") !=null ?  Boolean(atob(sessionStorage.getItem("UserData"))) : false;
}

ngOnInit() {
  this.userAccessService.isProfileMenuShow.subscribe(
    (resolve) =>{
      this.isProfileMenuShow = resolve;
    }
  )
}

  SignOut(){
    localStorage.removeItem("UserData");
    this.userAccessService.hideProfileMenu();
    this.route.navigate(["./dashboard"]);

  }

}
