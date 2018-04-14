import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import "rxjs/Rx";
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ManageQuestionService {

  constructor(private db:AngularFireDatabase,private httpClient:HttpClient) { }

  GetQuestionsByCategoryType(type:string){
    return this.db.list("/Question/"+type).valueChanges();
  }

  SaveQuestionToDB(obj:any,type:string)
  {
    return this.db.list("/Question/"+type+"/Questions").push(obj);
  }

  UpdateAnswerToDB(type:string,key:string,data:any){
    return this.db.list("/Question/"+type+"/Questions").update(key,data);
  }

}
