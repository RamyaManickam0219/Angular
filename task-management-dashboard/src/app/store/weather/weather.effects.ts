import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WeatherService } from '../../services/weather.service';
import * as WeatherActions from './weather.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class WeatherEffects {

  loadWeather$ = createEffect(() => this.actions$.pipe(
    ofType(WeatherActions.loadWeather),
    mergeMap(action => this.weatherService.getWeather(action.location).pipe(
      map(weather => WeatherActions.loadWeatherSuccess({ weather })),
      catchError(error => of(WeatherActions.loadWeatherFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}
