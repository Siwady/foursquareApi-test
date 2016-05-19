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
var api_service_1 = require('./api.service');
var FoursquareAppComponent = (function () {
    function FoursquareAppComponent(foursquareService) {
        this.foursquareService = foursquareService;
        this.title = 'foursquare-api works!';
        this.venues = [];
    }
    FoursquareAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foursquareService.venues.subscribe(function (data) {
            _this.venues = data;
        });
        this.foursquareService.get();
    };
    FoursquareAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'foursquare-app',
            templateUrl: 'foursquare.component.html',
            styleUrls: ['foursquare.component.css']
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], FoursquareAppComponent);
    return FoursquareAppComponent;
}());
exports.FoursquareAppComponent = FoursquareAppComponent;
//# sourceMappingURL=C:/Users/ESiwady/Documents/Acklen Projects/foursquare/foursquare/tmp/broccoli_type_script_compiler-input_base_path-Bxe752gG.tmp/0/app/foursquare.component.js.map