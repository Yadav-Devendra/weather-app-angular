import { Component } from '@angular/core';
import { AppComponentService } from './app.component.service';

@Component({
  selector: 'app-root',
  template: `
  <p *ngIf="weather">
    The current temperature in {{weather.name}} is {{weather.main.temp}}°C.
  </p>
`,
})
export class AppComponent {
  weather: any;

  constructor(private weatherService: AppComponentService) {}

  ngOnInit() {
    this.weatherService.getCurrentWeather('Mumbai').subscribe(data => {
      this.weather = data;
    });
  }


}
