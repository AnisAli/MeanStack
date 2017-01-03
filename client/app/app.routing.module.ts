import { NgModule }   from '@angular/core';
import { RouterModule,Routes} from '@angular/router'
import {ReviewListComponent} from './review/review.list.component'
import {ReviewAddComponent} from './review/review.add.component'


const routes:Routes =    [
        {path: '', component:ReviewListComponent, pathMatch: 'full' },
        {path: 'addReview',  component: ReviewAddComponent },
        {path: 'home',  component:ReviewListComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}