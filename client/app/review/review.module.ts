import {NgModule} from '@angular/core'
import { CommonModule }   from '@angular/common';
import { FormsModule }     from '@angular/forms';
import {ReviewListComponent} from './review.list.component'
import {ReviewAddComponent} from './review.add.component'
import { ReviewService} from './review.service'
import {SharedModule } from '../shared/shared.module'
import {Sorting} from './review.pipe'


@NgModule({
    imports:[CommonModule, FormsModule,SharedModule],
    declarations: [ReviewAddComponent,ReviewListComponent,Sorting],
    providers: [ReviewService],
    exports:[ReviewAddComponent,ReviewListComponent,Sorting ]
})
export class ReviewModule{
    constructor(){
      
    }
}