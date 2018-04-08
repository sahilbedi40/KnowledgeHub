import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import "rxjs/Rx";
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ManageQuestionService {

  constructor(private db:AngularFireDatabase,private httpClient:HttpClient) { }

  questionListUrl="assets/serverFormat.json";
  GetQuestionsByCategoryType(type:string){
    return this.db.list("/Question/"+type).valueChanges();
  //return this.httpClient.get(this.questionListUrl);
  }

  SaveQuestionToDB(obj:any,type:string)
  {
    return this.db.list("/Question/"+type+"/Questions").push(obj);
  }

}
