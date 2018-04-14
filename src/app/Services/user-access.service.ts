import { Injectable } from '@angular/core';
import "rxjs/Rx";
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserAccessService {

  constructor(private db:AngularFireDatabase) { }

  CheckUserAdminAccess(){
    return this.db.list("/Users/Admin").valueChanges();
  }

}
