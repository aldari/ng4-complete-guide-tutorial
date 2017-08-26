import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // a lot of perfomance hit, rerun a pipe for each data change
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
