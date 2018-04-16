import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(items: any[], searchText: any): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(tt =>{
      return (tt.title.toLowerCase().includes(searchText) ||tt.divContent.toLowerCase().includes(searchText));
    });
  }

}
