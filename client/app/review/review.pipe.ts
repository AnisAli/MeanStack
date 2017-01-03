
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'sort'
})
export class Sorting implements PipeTransform {

    transform(value: any[], sortBy: string): any {
        if (value == undefined) return value;

     
        if (sortBy == "MostRecent") {
             value= this.sortByID(value, false);
        }
        else if (sortBy == "OldestPost") {
            value= this.sortByID(value, true);
        }
        else if (sortBy == "HighestScore") {
            value= this.sortByScore(value, false);
        }
         else if (sortBy == "LowestScore") {
            value= this.sortByScore(value, true);
        }
        return value;

    }

    sortByScore(data: any[], ascending: boolean = true): any {
        data = data.sort((a, b) => {
            if (a.star < b.star) {
                return -1;
            }
            if (a.star > b.star) {
                return 1;
            }
            return 0;
        }
        );

        if (!ascending) 
            data = data.reverse();

            return data;

        
    }

    sortByID(data: any[], ascending: boolean = true): any {
        data = data.sort((a, b) => {
            if (a.id < b.id) {
                return -1;
            }
            if (a.id > b.id) {
                return 1;
            }
            return 0;
        }
        );

        if (!ascending) 
            data = data.reverse();

            return data;
        
    }
}
