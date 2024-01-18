import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../../shared/services/weather.service";
import {DEFAULT_CITY} from "../../../shared/constants";
import {SearchLocationComponent} from "../../../shared/components/search-location/search-location.component";
import {switchMap} from "rxjs";
import {LocationChangeService} from "../../../shared/services/location-change.service";

@Component({
  selector: 'app-weather-dashboard',
  standalone: true,
  imports: [SearchLocationComponent],
  templateUrl: './weather-dashboard.component.html',
  styleUrl: './weather-dashboard.component.scss'
})
export class WeatherDashboardComponent implements OnInit {

  public city = DEFAULT_CITY;
  public weatherDataForWeek: any;


  constructor(private weatherService: WeatherService,
              private locationChangeService: LocationChangeService) {
  }

  public ngOnInit() {
    this.locationChangeService.cityChange$.pipe(
      switchMap((city: string) => {
        this.city = city;
        return this.weatherService.getWeatherForecastByCity(this.city);
      })
    ).subscribe({
        next: data =>this.weatherDataForWeek = data,
        error: err => console.log(err)
      }
    )
  }
}
