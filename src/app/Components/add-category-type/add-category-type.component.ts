import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../../Services/loader.service';
import {CategoryTypeService} from '../../Services/category-type.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'add-category-type',
  templateUrl: './add-category-type.component.html',
  styleUrls: ['./add-category-type.component.css']
})
export class AddCategoryTypeComponent implements OnInit {
  CategoryType:any={
    title:"",
    routeValue:"",
    imgSrc:"",
    description:""
  };

public isHidden:boolean=true;
public isSuccess:boolean=false;
public messageText:string="";

  constructor(private loaderService:LoaderService, private categoryTypeService: CategoryTypeService,  private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("UserData") == null){
       this.route.navigate(["./admin/login"]);
    }
  }

  public AddCategoryType(form:NgForm): void{
    this.loaderService.showLoader();
    console.log(this.CategoryType);
    this.categoryTypeService.AddCategoryType(this.CategoryType).then(
      (resolve) =>{
        this.messageText = "Record added successfully";
        this.isSuccess = true;
        this.isHidden =false;
        form.resetForm();
        this.loaderService.hideLoader();
      },
      (reject) =>{
        this.messageText = "Facing problem to save record. Please try again later.";
        this.isHidden =false;
        this.isSuccess = false;    
        this.loaderService.hideLoader(); 
      }
    );
  }

}
