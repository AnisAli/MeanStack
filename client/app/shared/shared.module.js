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
var forms_1 = require('@angular/forms');
var pagination_component_1 = require('./pagination.component');
var shared_pipe_1 = require('./shared.pipe');
var star_1 = require('./star');
var stars_1 = require('./stars');
var letter_avatar_directive_1 = require('./letter-avatar.directive');
var SharedModule = (function () {
    function SharedModule() {
        console.log("<==== Shared constructor ====>");
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [shared_pipe_1.Paging, pagination_component_1.PaginationComponent, star_1.AcStar, stars_1.AcStars, shared_pipe_1.Sorting, letter_avatar_directive_1.LetterAvatarDirective],
            exports: [shared_pipe_1.Paging, pagination_component_1.PaginationComponent, common_1.CommonModule, forms_1.FormsModule, stars_1.AcStars, shared_pipe_1.Sorting, letter_avatar_directive_1.LetterAvatarDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map