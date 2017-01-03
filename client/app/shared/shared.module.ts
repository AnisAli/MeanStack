import {NgModule} from '@angular/core'
import { CommonModule }   from '@angular/common';
import { FormsModule }     from '@angular/forms';
import {PaginationComponent} from './pagination.component'
import {Paging,Sorting} from './shared.pipe'
import { AcStar } from './star';
import {AcStars} from './stars'
import {LetterAvatarDirective} from './letter-avatar.directive'



@NgModule({
    imports:[CommonModule, FormsModule],
    declarations: [Paging,PaginationComponent,AcStar,AcStars,Sorting,LetterAvatarDirective],
    exports:[Paging,PaginationComponent,CommonModule, FormsModule,AcStars,Sorting,LetterAvatarDirective]
})
export class SharedModule{
    constructor(){
        console.log("<==== Shared constructor ====>");
    }
}