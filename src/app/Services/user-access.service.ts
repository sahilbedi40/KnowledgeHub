import { Injectable } from '@angular/core';
import "rxjs";
import { Subject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class UserAccessService {
  private LoaderObserver= new Subject<boolean>();
  isProfileMenuShow=this.LoaderObserver.asObservable();

  constructor(private db:AngularFireDatabase) { }

  CheckUserAdminAccess(){
    return this.db.list("/Users/Admin").valueChanges();
  }

  showProfileMenu(){
    this.LoaderObserver.next(true);
  }

  hideProfileMenu()
  {
    this.LoaderObserver.next(false);
  }

}
