import { LatLngTuple } from "leaflet";

export interface ILocation {
	id: string;
	facilityName: string;
	address: string;
	coordinates: LatLngTuple
}