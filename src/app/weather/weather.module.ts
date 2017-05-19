// 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';

// app
import { SharedModule } from '../shared/shared.module'

// pages
import { WeatherDashComponent } from './pages/weather-dash.component';

// components
import { WeatherJsonDisplayComponent } from './components/weather-json-display.component';
import { WeatherSearchInputComponent } from './components/weather-search-input.component';

// state
import { WeatherActions } from './weather.actions';
import { WeatherEffects } from './weather.effects';

import { WeatherService } from './weather.service';

// exports
export { WeatherActions, WeatherService }
export { WeatherState } from './reducers/weather.state';
export { weatherReducer } from './reducers/weather.reducer';

const routes: Routes = [
  {path: '', component: WeatherDashComponent}
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.run(WeatherEffects),
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    WeatherDashComponent,
    WeatherJsonDisplayComponent,
    WeatherSearchInputComponent
  ],
  providers: [
    WeatherService,
    WeatherActions
  ]
})
export class WeatherModule { }
