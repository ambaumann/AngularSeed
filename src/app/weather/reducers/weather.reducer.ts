import { Action, ActionReducer } from '@ngrx/store';
import { WeatherActions } from '../weather.actions';
import { WeatherState, initialState } from './weather.state';
import { Map, List, Record } from 'immutable';

export function weatherReducer(state: WeatherState = initialState, action: Action) {
  switch (action.type) {
    case WeatherActions.RESET_WEATHER_MODULE:
      return initialState;

    case WeatherActions.LOAD_WEATHER_FOR_LOCATION_COMPLETE:
      return state.withMutations((ctx) => {
        ctx.set('weather', action.payload);
      }) as WeatherState;

    default:
      return state;
  };
};
