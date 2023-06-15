import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
    selector: 'maps-mini-map',
    templateUrl: './mini-map.component.html',
    styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit{

    @Input() lngLat?: [number, number];

    @ViewChild('map')
    public divMap?: ElementRef;

    ngAfterViewInit(){

        if ( !this.divMap?.nativeElement ) throw 'Mapa no encontrado'
        if ( !this.lngLat ) throw 'LngLat no puede ser nula'

        const map = new Map({
            container: this.divMap.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: this.lngLat,
            zoom: 15,
            interactive:false
        });

        new Marker()
            .setLngLat(this.lngLat)
            .addTo(map)

    }

}
