import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './MiddlePanel.css';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';

function MiddlePanel () {
	// Pullman coordinates for now
	const position: LatLngTuple = [46.73333, -117.16861];

	return (
		<div className="middlePanel">
			<div className="top-layer">
				<p>
					INCOMPLETE
				</p>
				<p>
					This section will contain the following:
				</p>
				<ul>
					<li>
						A search bar that will highlight requested assets/devices/locations
					</li>
					<li>
						A filter panel that allows you to filter by asset type, warning status, and version
					</li>
					<li>
						A node graph of the assets in the grid network.
					</li>
				</ul>
			</div>
			<div className="bottom-layer">
				<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
						url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
					/>
				</MapContainer>
			</div>
			
		</div>
	)
}

export default MiddlePanel;