import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../../shared/services/weather.service";
import {DEFAULT_CITY} from "../../../shared/constants";
import {SearchLocationComponent} from "../../../shared/components/search-location/search-location.component";
import {LocationChangeService} from "../../../shared/services/location-change.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public city = DEFAULT_CITY;
  public weatherData: any;

  constructor(private weatherService: WeatherService,
              private locationChangeService: LocationChangeService) {
  }

  public ngOnInit() {
    this.locationChangeService.cityChange$.pipe(
      switchMap((city: string) => {
        this.city = city;
        return this.weatherService.getWeatherByCity(this.city);
      })
    ).subscribe({
        next: data => this.weatherData = data,
        error: err => console.log(err)
      }
    )
  }
}
