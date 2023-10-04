import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-address-main',
  templateUrl: './address-main.component.html',
  styleUrls: ['./address-main.component.css']
})
export class AddressMainComponent {
  coords: any;
  location: any;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    const successCallback = (position:any) => {
      const lat = position?.coords.latitude;
      const lon = position?.coords.longitude;

      this.coords = `${lat}, ${lon}`;
      this.locationService.getLocation(lat, lon).subscribe(
        (data) => {
          console.log(data);
          this.location = data.results;
        }
      );
    };

    const errorCallback = (error:any) => {
      let errorMessage = 'Unknown error';

      switch (error.code) {
        case 1:
          errorMessage = 'Permission denied';
          break;
        case 2:
          errorMessage = 'Position unavailable';
          break;
        case 3:
          errorMessage = 'Timeout';
          break;
      }
    };

    this.locationService.getCoords(
      successCallback,
      errorCallback
    );
  }
}
