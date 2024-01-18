import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  private readonly API_KEY = '512953fffd59b4eb2b9006b8687d5575';
  private readonly BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  public getWeatherByCity(city: string): Observable<any> {
    const url = `${this.BASE_URL}?q=${city}&appid=${this.API_KEY}`;
    return this.http.get(url);
  }

  public getWeatherForecastByCity(city: string): Observable<any> {
    const url = `${this.BASE_URL}/forecast?q=${city}&appid=${this.API_KEY}`;
    return this.http.get(url);
  }
}
