import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { taskReducer } from './tasks/tasks.reducer';
import { TaskEffects } from './tasks/tasks.effects';
import { weatherReducer } from './weather/weather.reducer';
import { WeatherEffects } from './weather/weather.effects';
import { AppState } from './app-state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot<AppState>({ tasks: taskReducer, weather: weatherReducer }),
    EffectsModule.forRoot([TaskEffects, WeatherEffects])
  ]
})
export class AppStoreModule {}
