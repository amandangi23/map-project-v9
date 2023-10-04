import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GeocodeService } from 'src/app/services/GeocodeService';
import { Location } from '../../models/location-model';

@Component({
  selector: 'app-cordinates-lat-long',
  templateUrl: './cordinates-lat-long.component.html',
  styleUrls: ['./cordinates-lat-long.component.css']
})
export class CordinatesLatLongComponent {
  address = 'Delhi';
  location: Location;
  loading: boolean;

  constructor(
    private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.showLocation();
  }

  showLocation() {
    this.addressToCoordinates();
  }

  addressToCoordinates() {
    this.loading = true;
    this.geocodeService
      .geocodeAddress(this.address)
      .subscribe((location: Location) => {
        this.location = location;
        this.loading = false;
        this.ref.detectChanges();

        // Latitude and longitude are available here, so let's log them to the console
        console.log('Latitude:', location.lat);
        console.log('Longitude:', location.lng);
      });
  }
}
