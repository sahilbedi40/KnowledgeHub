import { Component, OnInit } from '@angular/core';
import {ManageQuestionService} from '../../Services/manage-question.service';
import {LoaderService} from '../../Services/loader.service';
import { NgForm } from '@angular/forms';

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
isHidden:boolean=true;
isSuccess:boolean=false;
messageText:string="";
  constructor(private _service:ManageQuestionService,private loaderService:LoaderService) { }

  ngOnInit() {
  }

  SaveQuestion(form:NgForm){
    if((this.selectedType !=null && this.selectedType !="") && this.Answerobj.title !="")
      {
        this.loaderService.showLoader();
        this.Answerobj.divId =this.maxRecordsInType+1;
        this.Answerobj.divContent = (this.Answerobj.divContent !="" && this.Answerobj.divContent != null) ? this.Answerobj.divContent : ""; 
        this._service.SaveQuestionToDB(this.Answerobj,this.selectedType).then(
          (resolve) =>{            
            this.messageText = "Record added successfully";
            this.isSuccess = true;
            this.isHidden =false;
            //this.ClearEditFormControlValue();
            form.resetForm();
            this.loaderService.hideLoader();
          },
          (reject) =>{           
            this.messageText = "Facing problem to save record. Please try again later.";
            this.isHidden =false;
            this.isSuccess = false;     
            console.log(reject);
            this.loaderService.hideLoader();
          }
        );
      }
      else{
        this.messageText ="Please fill the required fields (Title, Category).";
        this.isHidden =false;
        this.isSuccess = false;
      }
  }

  GetMaxRecordCountForSelectedType()
  {
    let result:any;
    if(this.selectedType != null && this.selectedType !="")
      {
        this._service.GetQuestionsByCategoryType(this.selectedType).subscribe(
          (data) =>{    
            
            if(data.length == 2)
              {
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
              }
              else{
                this.maxRecordsInType = 0;
              }

          },
          (error) =>{
            console.log(error);
          }
        );
      }

  }

  ClearEditFormControlValue(){
    this.Answerobj.title="";
    this.Answerobj.divContent="";
    this.Answerobj.divId=0;
    this.Answerobj.key="";
  }

}
