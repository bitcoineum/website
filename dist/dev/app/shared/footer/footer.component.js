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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FooterComponent = (function () {
    function FooterComponent() {
        this.slackUrl = 'http://slack.com/bitcoineum';
        this.twitterUrl = 'http://twitter.com/bitcoineum';
        this.redditUrl = 'http://www.reddit.com/r/bitcoineum';
        this.pdfUrl = 'http://www.bitcoineum.com/assets/Bitcoineum.pdf';
        this.mainPdfUrl = 'http://bitcoineum.com/assets/BitcoineumManifesto.pdf';
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-footer',
            templateUrl: 'footer.component.html',
            styleUrls: ['footer.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFTbEQ7SUFPRTtRQU5BLGFBQVEsR0FBVyw2QkFBNkIsQ0FBQztRQUNqRCxlQUFVLEdBQVcsK0JBQStCLENBQUM7UUFDckQsY0FBUyxHQUFXLG9DQUFvQyxDQUFDO1FBQ3pELFdBQU0sR0FBVyxpREFBaUQsQ0FBQztRQUNuRSxlQUFVLEdBQVcsc0RBQXNELENBQUM7SUFFNUQsQ0FBQztJQUVqQixrQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQVRILGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7O09BRVcsZUFBZSxDQVUzQjtJQUFELHNCQUFDO0NBVkQsQUFVQyxJQUFBO0FBVlksMENBQWUiLCJmaWxlIjoiYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1mb290ZXInLFxuICB0ZW1wbGF0ZVVybDogJ2Zvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb290ZXIuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2xhY2tVcmw6IHN0cmluZyA9ICdodHRwOi8vc2xhY2suY29tL2JpdGNvaW5ldW0nO1xuICB0d2l0dGVyVXJsOiBzdHJpbmcgPSAnaHR0cDovL3R3aXR0ZXIuY29tL2JpdGNvaW5ldW0nO1xuICByZWRkaXRVcmw6IHN0cmluZyA9ICdodHRwOi8vd3d3LnJlZGRpdC5jb20vci9iaXRjb2luZXVtJztcbiAgcGRmVXJsOiBzdHJpbmcgPSAnaHR0cDovL3d3dy5iaXRjb2luZXVtLmNvbS9hc3NldHMvQml0Y29pbmV1bS5wZGYnO1xuICBtYWluUGRmVXJsOiBzdHJpbmcgPSAnaHR0cDovL2JpdGNvaW5ldW0uY29tL2Fzc2V0cy9CaXRjb2luZXVtTWFuaWZlc3RvLnBkZic7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxufVxuIl19
