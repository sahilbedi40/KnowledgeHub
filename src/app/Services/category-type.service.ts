import { Injectable } from '@angular/core';
import "rxjs";
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class CategoryTypeService {

  constructor(private db:AngularFireDatabase) { }

  //categoryConfigUrl="assets/CategoryType.json";

 public  GetCategoryType(){
  return this.db.list("/CategoryType").valueChanges();
  }

  public AddCategoryType(categoryType:any){
    return this.db.list("/CategoryType").push(categoryType);
  }

}
