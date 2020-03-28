import { Injectable } from '@angular/core';
//import {Observable} from  'rxjs/Rx';
import "rxjs";
//import {HttpClient} from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class CategoryTypeService {

  constructor(private db:AngularFireDatabase) { }

  //categoryConfigUrl="assets/CategoryType.json";

 public  GetCategoryType(){
  return this.db.list("/CategoryType").valueChanges();
  }

}
