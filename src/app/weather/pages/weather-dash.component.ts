import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  templateUrl: './weather-dash.component.html',
  styleUrls: ['./weather-dash.component.scss']
})
export class WeatherDashComponent implements OnInit {

  constructor(public service: WeatherService) { }

  ngOnInit() {
    this.service.loadWeatherForLocation('Las Vegas');
  }

}
