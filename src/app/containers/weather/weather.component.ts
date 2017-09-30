import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WeatherService } from 'app/services/remote-communication-services/weather.service';

import { CurrentWeather } from './current-weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  currentCity: string;
  weatherPictureUrl: string;

  // this should be class (use object destructuring assigment)
  description: string;
  temp_max: number;
  temp_min: number;
  temp: number;

  weekForecast: Array<Object>;

  constructor(private weatherService: WeatherService) {
    this.currentCity = '';

    this.description = '';
    this.temp = 0;
    this.temp_max = 0;
    this.temp_min = 0;

    this.weekForecast = [];
  }

  ngOnInit() {
    this.getInitialWeather();
  }

  private getInitialWeather(): void {
    const observableIp: Observable<any> = this.weatherService.getClientLocation();

    observableIp.subscribe(data => {
      const countryCode: string = data.country;
      const observableCountryInfo: Observable<any> = this.weatherService.getClientCountryInfo(countryCode);

      observableCountryInfo.subscribe(dataC => {
        const capital: string = dataC.capital;

        this.getWeather(dataC.capital);
      });
    });
  }


  getWeather(city: string): void {
    const observableCurrent: Observable<any> = this.weatherService.getCurrentWeatherByCity(city);
    const observableWeekly: Observable<any> = this.weatherService.getWeeklyForecastByCity(city);
    const observableWeeklyHour: Observable<any> = this.weatherService.getWeeklyHourForecastByCity(city);

    observableCurrent.subscribe(data => this.renderCurrent(data));
    observableWeekly.subscribe(data => this.renderWeekly(data));
    observableWeeklyHour.subscribe(data => this.renderWeeklyHour(data));
  }



  private renderCurrent(data: any): void {
    // test of destructuring assigment
    const {
      name,
      main: {
        temp: tempLocal,
        temp_max: temp_maxLocal,
        temp_min: temp_minLocal
      },
      weather : [
          {
            description: descriptionLocal,
            icon: iconLocal
          }
        ]
      } = data;

    this.description = descriptionLocal;
    this.temp = Math.round(tempLocal);
    this.temp_max = Math.round(temp_maxLocal);
    this.temp_min = Math.round(temp_minLocal);
    this.currentCity = name;

    this.weatherPictureUrl = `http://openweathermap.org/img/w/${iconLocal}.png`;
    console.log(data);
  }

  private renderWeekly(data: any): void {
    console.log(data);

    this.weekForecast.length = 0;

    const { cnt, list } = data;

    for (const item of list) {
      let {
        // tslint:disable-next-line:prefer-const
        dt,
        temp: {
          max: maxLocal,
          min: minLocal
        },
        weather : [
            {
              // tslint:disable-next-line:prefer-const
              description: descriptionLocal,
              // tslint:disable-next-line:prefer-const
              icon: iconLocal
            }
          ]
      } = item;

      const date = new Date(dt * 1000);
      // find better solution to get name of a day
      const dayName = date.toString().split(' ')[0];

      maxLocal = Math.round(maxLocal);
      minLocal = Math.round(minLocal);

      const newItem = Object.assign(
        {},
        {maxLocal},
        {minLocal},
        {descriptionLocal},
        {weatherPictureUrl: `http://openweathermap.org/img/w/${iconLocal}.png`},
        {dayName}

      );

      this.weekForecast.push(newItem);
    }
  }

  private extractData(data: any) {

    return;
  }

  private renderWeeklyHour(data: any): void {
    console.log(data);
  }
}
