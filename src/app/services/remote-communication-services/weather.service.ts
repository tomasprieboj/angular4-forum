import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class WeatherService {


  private currentWeatherByCityURL: string;
  private weeklyWeatherByCityURL: string;
  private weeklyHourWeatherByCityURL: string;

  private ipInfoUrl: string;
  private countriesUrl: string;

  private result: any;

  constructor(private http: Http) {
    this.currentWeatherByCityURL = '';
    this.weeklyWeatherByCityURL = '';
    this.weeklyHourWeatherByCityURL = '';

    this.ipInfoUrl = 'https://ipinfo.io';
    this.countriesUrl = '';
  }

  getCurrentWeatherByCity(city: string): Observable<any> {
    this.setCorrectCityURL(city);

    return this.http.get(this.currentWeatherByCityURL)
      .map(res => res.json());
  }

  getWeeklyForecastByCity(city: string): Observable<any> {
    this.setCorrectWeeklyURL(city);

    return this.http.get(this.weeklyWeatherByCityURL)
      .map(res => res.json());
  }

  getWeeklyHourForecastByCity(city: string): Observable<any> {
    this.setCorrectWeeklyHourURL(city);
    console.log(this.weeklyHourWeatherByCityURL);
    return this.http.get(this.weeklyHourWeatherByCityURL)
      .map(res => res.json());
  }

  getClientLocation(): Observable<any> {
    return this.http.get(this.ipInfoUrl)
      .map(res => res.json());
  }

  getClientCountryInfo(countryCode: string): Observable<any> {
    this.setCorrectCountryUrl(countryCode);

    return this.http.get(this.countriesUrl)
      .map(res => res.json());
  }

  private setCorrectCountryUrl(countryCode: string): void {
    this.countriesUrl = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
  }

  private setCorrectWeeklyURL(city: string): void {
    if (city === '') {
      city = 'Bratislava';
    }
    // tslint:disable-next-line:max-line-length
    this.weeklyWeatherByCityURL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&APPID=87e9dc672eb01086a0f014f82dc0c3ea`;
  }

  private setCorrectWeeklyHourURL(city: string): void {
    if (city === '') {
      city = 'Bratislava';
    }
    // tslint:disable-next-line:max-line-length
    this.weeklyHourWeatherByCityURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=87e9dc672eb01086a0f014f82dc0c3ea`;
  }

  private setCorrectCityURL(city: string): void {
    if (city === '') {
      city = 'Bratislava';
    }
    // tslint:disable-next-line:max-line-length
    this.currentWeatherByCityURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=87e9dc672eb01086a0f014f82dc0c3ea`;
  }


}

