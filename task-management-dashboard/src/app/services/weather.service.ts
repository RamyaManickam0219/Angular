import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '52d894950301bf957715541c8c03196a'; 
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(location: string): Observable<Weather> {
    const params = { q: location, appid: this.apiKey };
    return this.http.get<any>(this.apiUrl, { params });
  }
}
