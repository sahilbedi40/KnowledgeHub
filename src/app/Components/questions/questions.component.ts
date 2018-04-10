import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {ManageQuestionService} from '../../Services/manage-question.service';
import { ActivatedRoute, Router } from '@angular/router';
//import {AddQuestionPopupComponent} from '../add-question-popup/add-question-popup.component';
//import { FirebaseListObservable } from 'angularfire2/database';
declare var $;

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  title:string="";
  questionList:any=[];
  cattype:string="";
  isHidden:boolean=true;
  selectedItemObject:any={
      title:"",
      divContent:"",
      divId:0,
      key:""
  };

  selectedCatType:string="";
  //@ViewChild(AddQuestionPopupComponent) private Mypopup:AddQuestionPopupComponent;
  constructor(private _service:ManageQuestionService,private activatedRoute: ActivatedRoute,private route:Router) { }

  ngOnInit() {
   // console.log(this.activatedRoute.snapshot.queryParams["type"]);
    //console.log('On init: ', this.Mypopup);
    this.cattype = this.activatedRoute.snapshot.queryParams["type"];
    this.GetQuestionsByCategoryType(this.cattype);
  }

  ngAfterViewInit() {
    // this.popup = new AddQuestionPopupComponent();
    //console.log('on after view init', this.Mypopup);
    // this returns null
}

  GetQuestionsByCategoryType(type:string){
    let result:any=[];
    this._service.GetQuestionsByCategoryType(type).subscribe(
      (data) =>{
       // this.questionList = data
       console.log(data);
       result=[];
       if($.isArray(data[0]))
        {
          result = data[0];
        }
        else{
          //  result = Object.keys(data[0]).map(function(key) {
          //   return data[0][key];
         //})
          $.each(data[0],function(k,v){
            v.key=k;
              result.push(v);
          })
          ;
        }
        console.log(result);
        this.questionList =[];
       this.title = data[1].toString();
       this.questionList = result;
      
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  AddQuestion()
  {
    this.route.navigate(["./addquestion"]);
    //alert("Test");
    //this.Mypopup.ShowModal();
  }

  UpdateAnswer(obj:any){
    this.isHidden=false;
    console.log(obj);
    this.selectedItemObject=Object.assign({}, obj);
    this.selectedCatType= this.cattype;
    $('#MyModal').modal({ backdrop: 'static' });
    //this.route.navigate(['./addquestion'])
  }

  UpdateAnswerToDB(){
    console.log(this.selectedItemObject);
    console.log(this.cattype);
    this._service.UpdateAnswerToDB(this.cattype,this.selectedItemObject.key,
      {title:this.selectedItemObject.title,divContent:this.selectedItemObject.divContent,
        divId:this.selectedItemObject.divId}).then(
          (resolve) =>{
           // console.log(resolve);
            $('#MyModal').modal('hide');
            this.ClearEditFormControlValue();
          },
          (reject) =>{
            console.log(reject);
          }
        )
 
  }

  ClearEditFormControlValue(){
    this.selectedItemObject.title="";
    this.selectedItemObject.divContent="";
    this.selectedItemObject.divId=0;
    this.selectedItemObject.key="";
  }

}
