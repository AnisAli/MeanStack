"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var review_service_1 = require('./review.service');
var ReviewListComponent = (function () {
    function ReviewListComponent(_reviewService, router) {
        this._reviewService = _reviewService;
        this.router = router;
        this.paging = [];
        this.currentPage = 1;
        this.displayPerPage = 5;
        this.IsDataLoaded = false;
        this.sortByField = "MostRecent";
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        this.getReviews();
    };
    ReviewListComponent.prototype.ngOnChanges = function () {
        this.getReviews();
    };
    ReviewListComponent.prototype.goToAddReview = function () {
        this.router.navigate(['/addReview']);
    };
    ReviewListComponent.prototype.getReviews = function () {
        var _this = this;
        this._reviewService.getReviews()
            .subscribe(function (reviews) { return _this.reviews = reviews; }, function (error) { return _this.errorMessage = error; }, function () { return _this.bindVolunteerList(); });
    };
    ReviewListComponent.prototype.appendNewReviews = function () {
        var _this = this;
        this._reviewService.newReviews.forEach(function (x) { return _this.reviews.push(x); });
    };
    ReviewListComponent.prototype.bindVolunteerList = function () {
        this.appendNewReviews();
        console.log('BindVolunteer()');
        this.IsDataLoaded = true;
        for (var i = 1; i <= Math.ceil(this.reviews.length / this.displayPerPage); i++) {
            this.paging.push(i);
        }
    };
    ReviewListComponent.prototype.changePage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ReviewListComponent.prototype.changeRate = function (pageNo) {
        console.log(pageNo);
    };
    ReviewListComponent.prototype.onSortChange = function () {
        this.currentPage = 1;
    };
    ReviewListComponent.prototype.getAvatarData = function (name) {
        return {
            size: 30,
            fontColor: '#FFFFFF',
            border: "0px solid #d3d3d3",
            isSquare: false,
            text: name
        };
    };
    ReviewListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "review.list.component.html",
            styleUrls: ['review.list.component.css']
        }), 
        __metadata('design:paramtypes', [review_service_1.ReviewService, router_1.Router])
    ], ReviewListComponent);
    return ReviewListComponent;
}());
exports.ReviewListComponent = ReviewListComponent;
//# sourceMappingURL=review.list.component.js.map