import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class FilterPipe implements PipeTransform {

  transform(value:any,inputVal:string,gender:string): any {
    console.log(inputVal);
    // console.log(value);
    
    return value.filter((x:any)=>x.name.includes(inputVal) && x.gender === gender)
  }

}
