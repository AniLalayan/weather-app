import {Component, OnInit} from '@angular/core';
import {Country, City, State} from "country-state-city";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LocationChangeService} from "../../services/location-change.service";

@Component({
  selector: 'app-search-location',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-location.component.html',
  styleUrl: './search-location.component.scss'
})
export class SearchLocationComponent {

  public cities: any[] = City.getAllCities();
  public selectedCity: string = '';

  constructor(private locationChangeService: LocationChangeService) {
  }

  onCityChange() {
    this.locationChangeService.notifyCityChange(this.selectedCity);
  }

}
