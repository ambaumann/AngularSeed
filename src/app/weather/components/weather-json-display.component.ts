import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChange } from '@angular/core';

import { Weather } from '../../core/model';

@Component({
  selector: 'app-weather-json-display',
  templateUrl: './weather-json-display.component.html',
  styleUrls: ['./weather-json-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherJsonDisplayComponent implements OnInit, OnChanges {

  @Input() weather: Weather;
  weatherDisplayString = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.weather = changes.weather.currentValue;
    this.weatherDisplayString = (this.weather && JSON.stringify(this.weather, null, ' ')) || '<Location Not Set>';
  }
}
