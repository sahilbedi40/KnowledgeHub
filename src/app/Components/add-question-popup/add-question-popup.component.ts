import { Component, OnInit } from '@angular/core';
import {ManageQuestionService} from '../../Services/manage-question.service';

declare var $;
@Component({
  selector: 'app-add-question-popup',
  templateUrl: './add-question-popup.component.html',
  styleUrls: ['./add-question-popup.component.css']
})
export class AddQuestionPopupComponent implements OnInit {
Answerobj:any={
  title:"",
  divContent:"",
  divId:0
};

selectedType:string;
maxRecordsInType:number=0;
  constructor(private _service:ManageQuestionService) { }

  ngOnInit() {
  }

  SaveQuestion(){
    console.log(this.Answerobj)
    console.log(this.selectedType);
    this.Answerobj.divId =this.maxRecordsInType+1;
    this._service.SaveQuestionToDB(this.Answerobj,this.selectedType).then(
      (resolve) =>{
        console.log(resolve);
      },
      (reject) =>{
        console.log(reject);
      }
    )
  }

  GetMaxRecordCountForSelectedType()
  {
    let result:any;
     this._service.GetQuestionsByCategoryType(this.selectedType).subscribe(
       (data) =>{        
        if($.isArray(data[0]))
          {
            result = data[0];
          }
          else{
             result = Object.keys(data[0]).map(function(key) {
              return data[0][key];
            });
          }

        this.maxRecordsInType = result.length;
       },
       (error) =>{
         console.log(error);
       }
     )
  }

}
