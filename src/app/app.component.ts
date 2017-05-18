import { Component, OnInit } from '@angular/core';
import { APIService } from './core/data-access/api.service';

import { Weather } from './core/model';

@Component({
  selector: 'seed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app works!';
  weather: Weather;
  displayWeather: string;

  constructor(public api: APIService) { }

  ngOnInit(): void {
    // not collecting subscrion but do not yet care.
    this.api.weather.getWeather('Las Vegas').subscribe( value => {
      this.weather = value;
      this.displayWeather = JSON.stringify(value, null, ' ');
    });
  }
}
