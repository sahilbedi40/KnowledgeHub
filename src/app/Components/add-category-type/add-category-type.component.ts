import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../../Services/loader.service';

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

  constructor(private loaderService:LoaderService) { }

  ngOnInit(): void {
  }

}
