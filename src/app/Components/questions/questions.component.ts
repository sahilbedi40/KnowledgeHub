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
    let result:any;
    this._service.GetQuestionsByCategoryType(type).subscribe(
      (data) =>{
       // this.questionList = data
       console.log(data);
       if($.isArray(data[0]))
        {
          result = data[0];
        }
        else{
           result = Object.keys(data[0]).map(function(key) {
            return data[0][key];
          });
        }

       
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
    $('#MyModal').modal({ backdrop: 'static' });
    //this.route.navigate(['./addquestion'])
  }

}
