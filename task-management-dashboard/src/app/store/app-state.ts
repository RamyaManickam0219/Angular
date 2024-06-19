import { TaskState } from './tasks/tasks.reducer';
import { WeatherState } from './weather/weather.reducer';

export interface AppState {
  tasks: TaskState;
  weather: WeatherState;
}
