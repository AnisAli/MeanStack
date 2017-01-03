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
var common_1 = require('@angular/common');
var review_service_1 = require('./review.service');
var review_1 = require('./review');
var alert_service_1 = require('../core/alert.service');
var ReviewAddComponent = (function () {
    function ReviewAddComponent(_reviewService, location) {
        this._reviewService = _reviewService;
        this.location = location;
        this.reviews = [];
        this.newReview = new review_1.Review();
    }
    ReviewAddComponent.prototype.addReview = function (review) {
        var _this = this;
        if (!review.name) {
            return;
        }
        console.log("asd");
        if (this._reviewService.addReview(review).subscribe(function (c) { return _this.reviews.push(c); }))
            this.onCompletion();
    };
    ReviewAddComponent.prototype.onCompletion = function () {
        alert_service_1.AlertService.ShowSucessAlert("Review Posted", "Thank you " + this.newReview.name + "!");
        this.newReview = new review_1.Review();
    };
    ReviewAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    ReviewAddComponent.prototype.changeRate = function (rate) {
        this.newReview.star = rate;
    };
    ReviewAddComponent.prototype.addNewReview = function () {
        this.errorMessage = '';
        if (!this.newReview.name || this.newReview.name.length < 1) {
            this.errorMessage = 'Please enter valid Name';
        }
        else if (!this.newReview.review || this.newReview.review.length < 1) {
            this.errorMessage = 'Please enter some thing in Review';
        }
        else {
            console.log("Add Review");
            this.addReview(this.newReview);
        }
    };
    ReviewAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "review.add.component.html"
        }), 
        __metadata('design:paramtypes', [review_service_1.ReviewService, common_1.Location])
    ], ReviewAddComponent);
    return ReviewAddComponent;
}());
exports.ReviewAddComponent = ReviewAddComponent;
//# sourceMappingURL=review.add.component.js.map