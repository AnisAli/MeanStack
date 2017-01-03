// Promise Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Review }           from './review';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ReviewService {
  // URL to web api
  private review_WEBAPI_Url = 'http://localhost:3000/api/reviews' //'app/review/reviews.json';
  private review_ADD_Url = 'http://localhost:3000/api/review' //'app/review/reviews.json'; 

  public newReviews:Review[]=[]; // for mock this willl be not needed in production
  review = new Review();

  constructor (private http: Http) {

  }
  
  getReviews (): Observable<Review[]> {
    return this.http.get(this.review_WEBAPI_Url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  // addReview (review:Review): Observable<Review[]> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });

  //   return this.http.post(this.review_ADD_Url, review, options)
  //                   .map(this.extractData)
  //                   .catch(this.handleError);
  // }

  addReview (review:Review): Observable<Review[]>  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers});
 
    return this.http.post(this.review_ADD_Url, JSON.stringify(review), options)
                    .map(this.extractData)
                    .catch(this.handleError);

  }
  //   addReview (review:Review): boolean {
  //           let headers = new Headers({ 'Content-Type': 'application/json' });
  //           let options = new RequestOptions({ headers: headers });
  //           review.id = Date.now();
  //           let name = review.name;
  //           this.newReviews.push(review);
  //           return true;
  // }

  private extractData(response:any) {
    let body = response.json();
    return body || { };
  }

 private handleError(error:any){
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}

