import { Component } from '@angular/core';
import {WeatherForecastService} from './shared/weather-forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FE';
  IssuesList: any = [];


  constructor(public weatherForecastService: WeatherForecastService) {
    this.LoadWeatherForecast();
  }


  // Issues list
  LoadWeatherForecast() {
    return this.weatherForecastService.Get().subscribe((data: {}) => {
      this.IssuesList = data;

      console.log(this.IssuesList);


    });
  }

}
