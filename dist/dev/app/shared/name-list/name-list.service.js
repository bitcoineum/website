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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var NameListService = (function () {
    function NameListService(http) {
        this.http = http;
    }
    NameListService.prototype.get = function () {
        return this.http.get('assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NameListService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    NameListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], NameListService);
    return NameListService;
}());
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUErQztBQUMvQyw4Q0FBNkM7QUFPN0M7SUFPRSx5QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBTWxDLDZCQUFHLEdBQUg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7YUFDdkIsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUVsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFLTyxxQ0FBVyxHQUFuQixVQUFxQixLQUFVO1FBRzdCLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPO1lBQzFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sV0FBTSxLQUFLLENBQUMsVUFBWSxHQUFHLGNBQWMsQ0FBQztRQUMxRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBOUJVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FRZSxXQUFJO09BUG5CLGVBQWUsQ0ErQjNCO0lBQUQsc0JBQUM7Q0EvQkQsQUErQkMsSUFBQTtBQS9CWSwwQ0FBZSIsImZpbGUiOiJhcHAvc2hhcmVkL25hbWUtbGlzdC9uYW1lLWxpc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nOyAgLy8gZm9yIGRlYnVnZ2luZ1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgdGhlIE5hbWVMaXN0IHNlcnZpY2Ugd2l0aCBtZXRob2RzIHRvIHJlYWQgbmFtZXMgYW5kIGFkZCBuYW1lcy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hbWVMaXN0U2VydmljZSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgTmFtZUxpc3RTZXJ2aWNlIHdpdGggdGhlIGluamVjdGVkIEh0dHAuXG4gICAqIEBwYXJhbSB7SHR0cH0gaHR0cCAtIFRoZSBpbmplY3RlZCBIdHRwLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIGZvciB0aGUgSFRUUCBHRVQgcmVxdWVzdCBmb3IgdGhlIEpTT04gcmVzb3VyY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfSBUaGUgT2JzZXJ2YWJsZSBmb3IgdGhlIEhUVFAgcmVxdWVzdC5cbiAgICovXG4gIGdldCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2Fzc2V0cy9kYXRhLmpzb24nKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgIC8vICAgICAgICAgICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnc2VydmVyIGRhdGE6JywgZGF0YSkpICAvLyBkZWJ1Z1xuICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICAvKipcbiAgICAqIEhhbmRsZSBIVFRQIGVycm9yXG4gICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvciAoZXJyb3I6IGFueSkge1xuICAgIC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1pZ2h0IHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXG4gICAgLy8gV2UnZCBhbHNvIGRpZyBkZWVwZXIgaW50byB0aGUgZXJyb3IgdG8gZ2V0IGEgYmV0dGVyIG1lc3NhZ2VcbiAgICBsZXQgZXJyTXNnID0gKGVycm9yLm1lc3NhZ2UpID8gZXJyb3IubWVzc2FnZSA6XG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xuICB9XG59XG5cbiJdfQ==
