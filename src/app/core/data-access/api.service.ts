import { Injectable } from '@angular/core';
import { WeatherRepoService } from './weather.repo.service';

@Injectable()
export class APIService {

  constructor(public weather: WeatherRepoService) { }
}
