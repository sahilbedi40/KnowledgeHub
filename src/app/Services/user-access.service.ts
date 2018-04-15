import { Injectable } from '@angular/core';
import "rxjs/Rx";
import { Subject } from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2/database';

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
