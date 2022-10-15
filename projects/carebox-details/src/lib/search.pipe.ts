import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, text?: any): any {
    if (!text) {
      return value;
    }
    return value.filter((data: any) => data.date === text);
  }

}
