"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var about_module_1 = require("./about/about.module");
var home_module_1 = require("./home/home.module");
var shared_module_1 = require("./shared/shared.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, about_module_1.AboutModule, home_module_1.HomeModule, shared_module_1.SharedModule.forRoot()],
            declarations: [app_component_1.AppComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUMxRCwwQ0FBZ0Q7QUFDaEQsc0NBQTJDO0FBQzNDLGlEQUErQztBQUMvQywyREFBd0Q7QUFFeEQscURBQW1EO0FBQ25ELGtEQUFnRDtBQUNoRCx3REFBc0Q7QUFhdEQ7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQVZyQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLGlCQUFVLEVBQUUscUNBQWdCLEVBQUUsMEJBQVcsRUFBRSx3QkFBVSxFQUFFLDRCQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkcsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsc0JBQWE7b0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCLENBQUM7WUFDRixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRTFCLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUExQixBQUEwQixJQUFBO0FBQWIsOEJBQVMiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgQWJvdXRNb2R1bGUgfSBmcm9tICcuL2Fib3V0L2Fib3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBBcHBSb3V0aW5nTW9kdWxlLCBBYm91dE1vZHVsZSwgSG9tZU1vZHVsZSwgU2hhcmVkTW9kdWxlLmZvclJvb3QoKV0sXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgIHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+J1xuICB9XSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
