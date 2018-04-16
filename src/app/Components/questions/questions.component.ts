import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {ManageQuestionService} from '../../Services/manage-question.service';
import { ActivatedRoute, Router } from '@angular/router';
import {LoaderService} from '../../Services/loader.service';
import {UserAccessService} from '../../Services/user-access.service';

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
  NoRecordExist:boolean=false;
  isAdminAccess:boolean=false;
  selectedItemObject:any={
      title:"",
      divContent:"",
      divId:0,
      key:""
  };

  searchText:string="";
  issearchBarShow:boolean=false;

  selectedCatType:string="";
  //@ViewChild(AddQuestionPopupComponent) private Mypopup:AddQuestionPopupComponent;
  constructor(private _service:ManageQuestionService,private activatedRoute: ActivatedRoute,private route:Router,private _loaderService:LoaderService,private userAccessService:UserAccessService) { }

  ngOnInit() {
   // console.log(this.activatedRoute.snapshot.queryParams["type"]);
    //console.log('On init: ', this.Mypopup);

     this.activatedRoute.queryParams.subscribe(
      params =>{
        this.cattype = params["type"];
        this.NoRecordExist = false;
        this.CheckUserAdminAccess();
        this.GetQuestionsByCategoryType(this.cattype);
      }
    );
    //this.GetQuestionsByCategoryType(this.cattype);
  }

  ngAfterViewInit() {
    // this.popup = new AddQuestionPopupComponent();
    //console.log('on after view init', this.Mypopup);
    // this returns null
}
 
CheckUserAdminAccess(){
     this.isAdminAccess = sessionStorage.getItem("UserData") !=null ?  Boolean(atob(sessionStorage.getItem("UserData"))) : false;
}

  GetQuestionsByCategoryType(type:string){
    this._loaderService.showLoader();
    let result:any=[];
    this._service.GetQuestionsByCategoryType(type).subscribe(
      (data) =>{
       // this.questionList = data

if(data.length === 2){       
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
        this.questionList =[];
        this.title = data[1].toString();
        this.questionList = result;
      this._loaderService.hideLoader();
}
else{
      this.title = data[0].toString();
      this.NoRecordExist = true;
      this.questionList = []; 
      this._loaderService.hideLoader();
}


      },
      (error) =>{
        console.log(error);
        this._loaderService.hideLoader();
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
    this.selectedItemObject=Object.assign({}, obj);
    this.selectedCatType= this.cattype;
    $('#MyModal').modal({ backdrop: 'static' });
    //this.route.navigate(['./addquestion'])
  }

  UpdateAnswerToDB(){
    this._loaderService.showLoader();    
    this._service.UpdateAnswerToDB(this.cattype,this.selectedItemObject.key,
      {title:this.selectedItemObject.title,divContent:this.selectedItemObject.divContent,
        divId:this.selectedItemObject.divId}).then(
          (resolve) =>{          
            $('#MyModal').modal('hide');
            this.ClearEditFormControlValue();
            this._loaderService.hideLoader();
          },
          (reject) =>{
            console.log(reject);
            this._loaderService.hideLoader();
          }
        )
 
  }

  ClearEditFormControlValue(){
    this.selectedItemObject.title="";
    this.selectedItemObject.divContent="";
    this.selectedItemObject.divId=0;
    this.selectedItemObject.key="";
  }

  ShowHideSearchBar(){
    this.issearchBarShow = !this.issearchBarShow;
  }    
}
