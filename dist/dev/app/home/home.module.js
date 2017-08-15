"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home_component_1 = require("./home.component");
var home_routing_module_1 = require("./home-routing.module");
var shared_module_1 = require("../shared/shared.module");
var name_list_service_1 = require("../shared/name-list/name-list.service");
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [home_routing_module_1.HomeRoutingModule, shared_module_1.SharedModule],
            declarations: [home_component_1.HomeComponent],
            exports: [home_component_1.HomeComponent],
            providers: [name_list_service_1.NameListService]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLG1EQUFpRDtBQUNqRCw2REFBMEQ7QUFDMUQseURBQXVEO0FBQ3ZELDJFQUF3RTtBQVF4RTtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBTnRCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHVDQUFpQixFQUFFLDRCQUFZLENBQUM7WUFDMUMsWUFBWSxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7U0FDN0IsQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQTNCLEFBQTJCLElBQUE7QUFBZCxnQ0FBVSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gJy4vaG9tZS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0hvbWVSb3V0aW5nTW9kdWxlLCBTaGFyZWRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtIb21lQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0hvbWVDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtOYW1lTGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iXX0=
