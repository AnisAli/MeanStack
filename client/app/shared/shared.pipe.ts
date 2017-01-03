
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'paging',
     pure: false
})
export class Paging implements PipeTransform {

    transform(value: any, arg1: number, arg2: number): any {
        if (value == undefined) return value;

        let filter: number = arg1 ? arg1 : 1; //pageNo
        let totalDisplay = arg2;

        return value.slice(((filter - 1) * totalDisplay), filter * totalDisplay);
    }
}


@Pipe({
    name: 'sort'
})
export class Sorting implements PipeTransform {

    transform(value: any[]): any {
        if(value==undefined) return value;

        let ascending = true;
           if (ascending) {
            value = value.sort((a, b) => {
                if (a.name.toUpperCase() < b.name.toUpperCase()) {
                    return -1;
                }
                if (a.name.toUpperCase() > b.name.toUpperCase()) {
                    return 1;
                }
                return 0;
            }
            );
        }
        else {
            value = value.reverse();
        }
        return value;



    }
}
