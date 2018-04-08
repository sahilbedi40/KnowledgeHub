import { Injectable } from '@angular/core';
//import {Observable} from  'rxjs/Rx';
import "rxjs/Rx";
//import {HttpClient} from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryTypeService {

  constructor(private db:AngularFireDatabase) { }

  //categoryConfigUrl="assets/CategoryType.json";

 public  GetCategoryType(){
  return this.db.list("/CategoryType").valueChanges();
  }

}
