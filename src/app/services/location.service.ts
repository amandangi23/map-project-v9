import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocation(latitude:any, longitude:any): Observable<any> {
    const key = 'AIzaSyDtnAASFjTTT2ufOxKKlD_RlrJ7axBleT0';

    // const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&location_type=ROOFTOP&result_type=street_address&key=${key}`;

    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&location_type=ROOFTOP&key=${key}`;

    return this.http.get(url);
  }

  getCoords(successCallback:any, errorCallback:any): any {
    const options = {
      enableHighAccuracy: true,
      timeout: 1000,
      maximumAge: 0,
    };

    return navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );
  }
}
