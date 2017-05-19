import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather/weather.module';

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

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    // not collecting subscrion but do not yet care.
    this.weatherService.weather$.subscribe(value => {
      this.weather = value;
      this.displayWeather = JSON.stringify(value, null, ' ');
    });
    this.weatherService.loadWeatherForLocation('Las Vegas');
  }
}
