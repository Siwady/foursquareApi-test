import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FoursquareAppComponent, environment } from './app/';
import {ApiService} from './app/api.service';
import {HTTP_PROVIDERS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(FoursquareAppComponent, [ApiService, HTTP_PROVIDERS]);

