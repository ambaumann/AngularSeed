import { Action } from '@ngrx/store';
import { Weather } from '../core/model';

export class WeatherActions {

  // must be unique identifier for all action module definitions.
  static readonly ACTION_IDENTIFIER = '[Weather]';

  static prependIdentifier(actionName: string): string {
    return WeatherActions.ACTION_IDENTIFIER + ' ' + actionName;
  }

  // tslint:disable:member-ordering
  static readonly RESET_WEATHER_MODULE = WeatherActions.prependIdentifier('RESET_WEATHER_MODULE');

  resetModuleState(): Action {
    return {
      type: WeatherActions.RESET_WEATHER_MODULE
    }
  }

  static readonly LOAD_WEATHER_FOR_LOCATION = WeatherActions.prependIdentifier('LOAD_WEATHER_FOR_LOCATION');
  static readonly LOAD_WEATHER_FOR_LOCATION_COMPLETE = WeatherActions.prependIdentifier('LOAD_WEATHER_FOR_LOCATION_COMPLETE');
  static readonly LOAD_WEATHER_FOR_LOCATION_ERROR = WeatherActions.prependIdentifier('LOAD_WEATHER_FOR_LOCATION_ERROR');

  loadWeatherForLocation(location: string): Action {
    return {
      type: WeatherActions.LOAD_WEATHER_FOR_LOCATION,
      payload: location
    };
  }

  loadWeatherForLocationComplete(weather: Weather): Action {
    return {
      type: WeatherActions.LOAD_WEATHER_FOR_LOCATION_COMPLETE,
      payload: weather
    };
  }

  loadWeatherForLocationError(error: Response, location: string): Action {
    return {
      type: WeatherActions.LOAD_WEATHER_FOR_LOCATION_ERROR,
      payload: { error: error, location: location }
    }
  }
}
