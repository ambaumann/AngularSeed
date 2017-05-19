import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';

import { AppState } from '../../app.module';
import { Selector } from '../../core/core.module';

import { Weather } from '../../core/model';

export function getWeather(): Selector<AppState, Weather> {
  return state$ => state$.map(state => state.weather.weather).distinctUntilChanged();
}
