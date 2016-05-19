import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class ApiService {
  public venues: Rx.Observable<any[]>;
  private venuesObserver: Rx.Observer<any[]>;
  private dataStore: {
    venues: any[]
  };
  ll: string = '15.5016812,-88.0386028';
  radius: string = '1000';
  limit: string = '10';
  clientId: string = 'XPB0JBR0H4C0HAA35MTKMDJUVF0TGGCJNOZRAYNB1WXTE5EW';
  clientSecret: string = '4ITRZG2KKRYGPD4NTN0OIHYIHIIAXRQ2U0FSTYVFBT2QB4TB';
  v: string = '20131017';
  constructor(private http: Http) {
    this.dataStore = { venues: [] };
    this.venues = new Rx.Observable<any[]>(observer => {
      this.venuesObserver = observer;
    }).startWith(this.dataStore.venues).share();
  }

  get() {
    this.http.get('https://api.foursquare.com/v2/venues/search?ll=' + this.ll +
      '&radius=' + this.radius +
      '&limit=' + this.limit +
      '&client_id=' + this.clientId +
      '&client_secret=' + this.clientSecret +
      '&v=' + this.v,
      {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .map(response => response.json()).subscribe(data => {
        this.dataStore.venues = data;
        this.venuesObserver.next(this.dataStore.venues);
      }, error =>
        console.log('Could not load element.')
      );
  }
}
