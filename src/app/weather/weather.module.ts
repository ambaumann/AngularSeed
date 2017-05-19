// 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';

// pages
import { WeatherDashComponent } from './pages/weather-dash.component';

// components
import { WeatherJsonDisplayComponent } from './components/weather-json-display.component';

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
    RouterModule.forChild(routes)
  ],
  declarations: [
    WeatherDashComponent,
    WeatherJsonDisplayComponent
  ],
  providers: [
    WeatherService,
    WeatherActions
  ]
})
export class WeatherModule { }
