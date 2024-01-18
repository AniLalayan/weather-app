import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationChangeService {
  private cityChange = new Subject<string>();

  cityChange$ = this.cityChange.asObservable();

  notifyCityChange(city: string) {
    this.cityChange.next(city);
  }
}
