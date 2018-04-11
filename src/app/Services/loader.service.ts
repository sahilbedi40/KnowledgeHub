import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class LoaderService {

  private LoaderObserver= new Subject<boolean>();
  StartLoader=this.LoaderObserver.asObservable();
  
    constructor() { }
  
    showLoader()
    {
      this.LoaderObserver.next(true);
    }
  
    hideLoader()
    {
      this.LoaderObserver.next(false);
    }

}
