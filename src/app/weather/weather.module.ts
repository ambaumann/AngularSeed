import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { WeatherActions } from './weather.actions';
import { WeatherEffects } from './weather.effects';
import { WeatherService } from './weather.service';

export { WeatherActions, WeatherService }
export { WeatherState } from './reducers/weather.state';
export { weatherReducer } from './reducers/weather.reducer';


@NgModule({
  imports: [
    CommonModule,
    EffectsModule.run(WeatherEffects),
  ],
  declarations: [],
  providers: [
    WeatherService,
    WeatherActions
  ]
})
export class WeatherModule { }
