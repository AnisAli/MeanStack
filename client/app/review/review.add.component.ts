import {Component, OnInit,OnChanges} from '@angular/core'
import { Location }               from '@angular/common';
import {ReviewService} from './review.service'
import {Review} from './review'
import {AlertService} from '../core/alert.service'

@Component({
    moduleId : module.id,
    templateUrl : `review.add.component.html` 
})
export class ReviewAddComponent  {

    reviews:Review[]=[];
    newReview:Review = new Review();
    errorMessage: string;
   
    constructor(private _reviewService:ReviewService,
                private location: Location) {}
    
    addReview (review: Review) {
        if (!review.name) { return; }
        console.log("asd");
           if(this._reviewService.addReview(review).subscribe(c=> this.reviews.push(c)))  // in real world, we will post the request and get observable. 
            this.onCompletion() ;
    }
  
   private onCompletion():void{
            AlertService.ShowSucessAlert("Review Posted","Thank you "+this.newReview.name+"!");
            this.newReview = new Review();

    }

    goBack(): void {
        this.location.back();
      }


    changeRate(rate:any): void {
       this.newReview.star=rate;
    }

    addNewReview():void{
             this.errorMessage = '';  
              
        if( !this.newReview.name || this.newReview.name.length<1){
             this.errorMessage = 'Please enter valid Name';  
        }
        else if( !this.newReview.review || this.newReview.review.length<1){
             this.errorMessage = 'Please enter some thing in Review';  
        }
        else  //otherwise Add
           {
               console.log("Add Review");
                this.addReview(this.newReview);
           }
    
    }
    
}