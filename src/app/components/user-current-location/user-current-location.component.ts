
 
import { Component } from '@angular/core';

// Define the Position and PositionError interfaces
interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

interface PositionError {
  code: number;
  message: string;
}

@Component({
  selector: 'app-user-current-location',
  templateUrl: './user-current-location.component.html',
  styleUrls: ['./user-current-location.component.css']
})
export class UserCurrentLocationComponent {
  name = 'Angular';
  public lat;
  public lng;

  public ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log( 'lat:' , this.lat);
          console.log( 'lng:' ,this.lng);  
        }; 

          
      }, 
      (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
 

