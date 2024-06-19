import { createReducer, on } from '@ngrx/store';
import { Weather } from '../../models/weather.model';
import * as WeatherActions from './weather.actions';

export interface WeatherState {
  weather: Weather | null;
  loading: boolean;
  error: any;
}

const initialState: WeatherState = {
  weather: null,
  loading: false,
  error: null
};

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.loadWeather, state => ({ ...state, loading: true })),
  on(WeatherActions.loadWeatherSuccess, (state, { weather }) => ({ ...state, weather, loading: false })),
  on(WeatherActions.loadWeatherFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
