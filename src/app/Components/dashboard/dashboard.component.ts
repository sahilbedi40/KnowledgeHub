import { Component, OnInit } from '@angular/core';
import {CategoryTypeService} from '../../Services/category-type.service';
import {LoaderService} from '../../Services/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  CategoryTypeList:any=[];
  constructor(private _service:CategoryTypeService,private _loaderService:LoaderService) { }

  ngOnInit() {
    
    this.GetCategoryType();
  }

  GetCategoryType(){
    this._loaderService.showLoader();
    this._service.GetCategoryType().subscribe(
      (data)=>{
        console.log(data);
        this.CategoryTypeList = data;
        this._loaderService.hideLoader();
          //console.log(data);
          //console.log(data["CategoryType"]);
      },
      (error)=>{
        console.log(error);
        this._loaderService.hideLoader();
      }
    );
  }



}
