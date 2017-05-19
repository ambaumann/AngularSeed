import { Map, List, Record } from 'immutable';
import { Weather } from '../../core/model';

export interface WeatherState extends Map<string, any> {
    weather: Weather;
}

export const WeatherRecord = Record({
    weather: null
});

export const initialState: WeatherState = new WeatherRecord() as WeatherState;
