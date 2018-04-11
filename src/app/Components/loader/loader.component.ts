import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../../Services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  showLoader:boolean=false;
  constructor(private _service:LoaderService) {
    _service.StartLoader.subscribe(
      (loading) =>{
        this.showLoader= loading;
      }
    )
   }

  ngOnInit() {
  }

}
