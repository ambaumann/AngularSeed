import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

import { WeatherService } from '../weather.service';
import { DestroySubscribers } from '../../core/destroy-subscribers.decorator';


@Component({
  selector: 'app-weather-search-input',
  templateUrl: './weather-search-input.component.html',
  styleUrls: ['./weather-search-input.component.scss']
})
@DestroySubscribers()
export class WeatherSearchInputComponent implements OnInit {

  public subscribers: any = {};
  searchForm: FormGroup;

  constructor(public service: WeatherService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      'locationInput': '',
    });
  }

  ngOnInit() {
    this.subscribers.locationInputChanges = this.searchForm.controls['locationInput'].valueChanges
      .debounceTime(300).subscribe((input) => {
        this.service.loadWeatherForLocation(input);
      });
  }

}
