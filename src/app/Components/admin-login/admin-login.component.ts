import { Component, OnInit } from '@angular/core';
import {UserAccessService} from '../../Services/user-access.service';
import {LoaderService} from '../../Services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

userModel:any={
email:'',
password:'',
isAdmin:false
};
isShow:boolean=false;
isSuccess:boolean = false;
messageText:string="";

  constructor(private _userAccessService:UserAccessService,private route:Router,private _loaderService:LoaderService) { }

  ngOnInit() {
  }

  ValidateAdmin(){
    this.messageText = "";
    this.isShow = false;
    this._loaderService.showLoader();
    this._userAccessService.CheckUserAdminAccess().subscribe(
      (resolve) =>{        
        if(this.userModel.email === resolve[0].toString() && this.userModel.password === resolve[2].toString())
          {
              localStorage.setItem("UserData",btoa("true"));
              this._loaderService.hideLoader();
              this._userAccessService.showProfileMenu();
              this.route.navigate(["./dashboard"]);
          }
          else{
            this.messageText ="Email and Password does not match.";        
            this.isSuccess = false;
            this.isShow = true;
            this._loaderService.hideLoader();
            this._userAccessService.hideProfileMenu();
          }
      },
      (reject) =>{
        this.messageText = "Facing problem to Sign In. Please try again later.";
        this.isShow = true;
        this.isSuccess = false;  
        this._userAccessService.hideProfileMenu();
        this._loaderService.hideLoader();
        console.log(reject);
      }
    );
  }

}
