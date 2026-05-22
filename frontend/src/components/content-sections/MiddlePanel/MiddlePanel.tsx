import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './MiddlePanel.css';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';
import SearchBar from '../../common/SearchBar/SearchBar';
import { ASSET_TYPES } from '../../../types/assets';
import Badge from '../../common/Badge/Badge';

function MiddlePanel () {
	// Pullman coordinates for now
	const position: LatLngTuple = [46.73333, -117.16861];
	const filters = ['Substation', "Power Plant"]

	return (
		<div className="middlePanel">
			<div className="top-layer">
				<SearchBar></SearchBar>
				<div className='filters'>
					{
						filters.map(f => {
							return (
								<Badge innerContent={<p>{f}</p>}></Badge>
							)
						})
					}
				</div>
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