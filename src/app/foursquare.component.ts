import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
@Component({
  moduleId: module.id,
  selector: 'foursquare-app',
  templateUrl: 'foursquare.component.html',
  styleUrls: ['foursquare.component.css']
})
export class FoursquareAppComponent implements OnInit {
  venues: any[];
  title = 'foursquare-api works!';
  constructor(private foursquareService: ApiService) {
    this.venues = [];
  }
  ngOnInit() {
    this.foursquareService.venues.subscribe(data => {
      this.venues = data;
    });
    this.foursquareService.get();
  }
}
