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
var http_1 = require('@angular/http');
var Rx = require('rxjs/Rx');
var ApiService = (function () {
    function ApiService(http) {
        var _this = this;
        this.http = http;
        this.ll = '15.5016812,-88.0386028';
        this.radius = '1000';
        this.limit = '10';
        this.clientId = 'XPB0JBR0H4C0HAA35MTKMDJUVF0TGGCJNOZRAYNB1WXTE5EW';
        this.clientSecret = '4ITRZG2KKRYGPD4NTN0OIHYIHIIAXRQ2U0FSTYVFBT2QB4TB';
        this.v = '20131017';
        this.dataStore = { venues: [] };
        this.venues = new Rx.Observable(function (observer) {
            _this.venuesObserver = observer;
        }).startWith(this.dataStore.venues).share();
    }
    ApiService.prototype.get = function () {
        var _this = this;
        this.http.get('https://api.foursquare.com/v2/venues/search?ll=' + this.ll +
            '&radius=' + this.radius +
            '&limit=' + this.limit +
            '&client_id=' + this.clientId +
            '&client_secret=' + this.clientSecret +
            '&v=' + this.v, {
            headers: new http_1.Headers({
                'Content-Type': 'application/json'
            })
        })
            .map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.dataStore.venues = data;
            _this.venuesObserver.next(_this.dataStore.venues);
        }, function (error) {
            return console.log('Could not load element.');
        });
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=C:/Users/ESiwady/Documents/Acklen Projects/foursquare/foursquare/tmp/broccoli_type_script_compiler-input_base_path-Bxe752gG.tmp/0/app/api.service.js.map