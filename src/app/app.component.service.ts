import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  private API_KEY = 'c3920ebf531c740d7ef41b02e74b7749';
  private API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${this.API_KEY}`;

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string) {
    return this.http.get(`${this.API_URL}&q=${city}`);
  }
}
