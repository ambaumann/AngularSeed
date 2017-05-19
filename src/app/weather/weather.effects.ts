import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { AppState } from '../app.module';
import { APIService } from '../core/core.module';


import { WeatherActions } from './weather.actions';

import { Weather } from '../core/model';


@Injectable()
export class WeatherEffects {

  @Effect()
  loadWeatherForLocation$ = this.actions$
    .ofType(WeatherActions.LOAD_WEATHER_FOR_LOCATION)
    .switchMap(action => {
      const location = action.payload as string;
      return this.api.weather.getWeather(location)
        .map(weather =>
          this.moduleActions.loadWeatherForLacationComplete(weather)
        )
        .catch((error: any) => Observable.of(this.moduleActions.loadWeatherForLacationError(error, location)));
    });

  constructor(
    private actions$: Actions,
    private api: APIService,
    private moduleActions: WeatherActions,
    private store$: Store<AppState>
  ) { }

}
