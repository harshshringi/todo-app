import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumValues'
})
export class EnumValuesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Object.values(value);
  }

}
