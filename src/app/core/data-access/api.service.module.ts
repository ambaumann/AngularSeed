import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { APIService } from './api.service';
import { WeatherRepoService } from './weather.repo.service';

@NgModule({
  imports: [ HttpModule ],
  exports: [],
  declarations: [],
  providers: [
    APIService,
    WeatherRepoService
  ],
})
export class APIModule { }
