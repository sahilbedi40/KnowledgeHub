import { Component, OnInit } from '@angular/core';
import {CategoryTypeService} from '../../Services/category-type.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  CategoryTypeList:any=[];
  constructor(private _service:CategoryTypeService) { }

  ngOnInit() {
    this.GetCategoryType();
  }

  GetCategoryType(){
    this._service.GetCategoryType().subscribe(
      (data)=>{
        console.log(data);
        this.CategoryTypeList = data;
          //console.log(data);
          //console.log(data["CategoryType"]);
      },
      (error)=>{
        console.log(error);
      }
    )
  }



}
