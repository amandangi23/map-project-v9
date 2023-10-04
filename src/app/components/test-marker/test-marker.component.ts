import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core'; 


@Component({ 
  selector: 'app-test-marker',
  templateUrl: './test-marker.component.html',
  styleUrls: ['./test-marker.component.css']
})
export class TestMarkerComponent {

   // google maps zoom level
  zoom: number = 16;

  // initial center position for the map
  lat: number = 28.6448;
  lng: number = 77.216721;
  scroll: boolean = false;

  clickedMarker(label: string, index: number) {
    // console.log(`clicked the marker: ${label || index}`);
    //console.log(this.clickedMarker);
    this.markers[index].visible = false;
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      visible: true,
      opacity: 0.4,
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [ 
    {
      lat: 28.6448,
      lng: 77.216721,
      label: '',
      draggable: true,
      visible: false,
      opacity: 0.7,
    },
  ];

}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  visible: boolean;
  opacity: number;
}


// npm install @agm/core
