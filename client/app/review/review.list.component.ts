import { Component, OnInit, OnChanges } from '@angular/core'
import { Location } from '@angular/common';
import {Router} from  '@angular/router'
import { ReviewService } from './review.service'
import { Review } from './review'
@Component({
    moduleId: module.id,
    templateUrl: `review.list.component.html`,
    styleUrls:['review.list.component.css']
})
export class ReviewListComponent implements OnInit, OnChanges {
    errorMessage: string;
    reviews: Review[];
    paging: number[] = [];
    currentPage: number = 1;
    displayPerPage: number = 5;
    IsDataLoaded: boolean = false;
    sortByField="MostRecent";

   
    constructor(private _reviewService: ReviewService,
      private router: Router) { }

    ngOnInit() {
        this.getReviews();
    }

    ngOnChanges() {
        this.getReviews();
    }

    goToAddReview(): void {
        this.router.navigate(['/addReview']);
      }

    getReviews() {
        this._reviewService.getReviews()
            .subscribe(
            reviews => this.reviews = reviews,
            error => this.errorMessage = <any>error,
            () => this.bindVolunteerList());
    }

    appendNewReviews() { // this method is just use for add newly added data (this will not require in production because we will fetch from Web Server )
        this._reviewService.newReviews.forEach(x => this.reviews.push(x));
    }

    bindVolunteerList(): void {
        this.appendNewReviews();
        console.log('BindVolunteer()');
        this.IsDataLoaded = true;
        for (let i = 1; i <= Math.ceil(this.reviews.length / this.displayPerPage); i++) {
            this.paging.push(i);
        }
    }

    changePage(pageNo: number): void {
        this.currentPage = pageNo;
    }

    changeRate(pageNo:any): void {
        console.log(pageNo);
    }
   
    onSortChange(){
        this.currentPage=1;
    }

     getAvatarData(name:string)
     {
          return {
                size: 30,
                fontColor: '#FFFFFF',
                border: "0px solid #d3d3d3",
                isSquare: false,
                text: name
            };
     }

}