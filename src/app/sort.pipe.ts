import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], prop: string): any[] {
    arr.sort((a, b) => {
      if (a[prop] > b[prop]) {
        return 1
      }
      else if (a[prop] < b[prop]) {
        return -1
      }
      else {
        return 0
      }
    })
    return arr;
  }
}
