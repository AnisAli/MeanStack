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
var Sorting = (function () {
    function Sorting() {
    }
    Sorting.prototype.transform = function (value, sortBy) {
        if (value == undefined)
            return value;
        if (sortBy == "MostRecent") {
            value = this.sortByID(value, false);
        }
        else if (sortBy == "OldestPost") {
            value = this.sortByID(value, true);
        }
        else if (sortBy == "HighestScore") {
            value = this.sortByScore(value, false);
        }
        else if (sortBy == "LowestScore") {
            value = this.sortByScore(value, true);
        }
        return value;
    };
    Sorting.prototype.sortByScore = function (data, ascending) {
        if (ascending === void 0) { ascending = true; }
        data = data.sort(function (a, b) {
            if (a.star < b.star) {
                return -1;
            }
            if (a.star > b.star) {
                return 1;
            }
            return 0;
        });
        if (!ascending)
            data = data.reverse();
        return data;
    };
    Sorting.prototype.sortByID = function (data, ascending) {
        if (ascending === void 0) { ascending = true; }
        data = data.sort(function (a, b) {
            if (a.id < b.id) {
                return -1;
            }
            if (a.id > b.id) {
                return 1;
            }
            return 0;
        });
        if (!ascending)
            data = data.reverse();
        return data;
    };
    Sorting = __decorate([
        core_1.Pipe({
            name: 'sort'
        }), 
        __metadata('design:paramtypes', [])
    ], Sorting);
    return Sorting;
}());
exports.Sorting = Sorting;
//# sourceMappingURL=review.pipe.js.map