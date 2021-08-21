import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonparse'
})
export class JsonparsePipe implements PipeTransform {


	arr:any=[];
  transform(value){
    this.arr=JSON.parse(value);
    return this.arr;
  }

}
