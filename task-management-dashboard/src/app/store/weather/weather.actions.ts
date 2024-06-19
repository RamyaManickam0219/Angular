import { createAction, props } from '@ngrx/store';
import { Weather } from '../../models/weather.model';

export const loadWeather = createAction('[Weather] Load Weather', props<{ location: string }>());
export const loadWeatherSuccess = createAction('[Weather] Load Weather Success', props<{ weather: Weather }>());
export const loadWeatherFailure = createAction('[Weather] Load Weather Failure', props<{ error: any }>());
