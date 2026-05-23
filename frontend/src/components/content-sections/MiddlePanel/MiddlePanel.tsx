import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './MiddlePanel.css';
import 'leaflet/dist/leaflet.css';
import { Icon, LatLngTuple, PointExpression } from 'leaflet';
import SearchBar from '../../common/SearchBar/SearchBar';
import Badge from '../../common/Badge/Badge';
import { IAsset } from '../../../types/assets';

interface MiddlePaneProps {
	assets: IAsset[];
	selectAsset: CallableFunction;
}

function MiddlePanel (props: MiddlePaneProps) {
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
					{
						props.assets.map(a => {
							return (
								<Marker 
									title={a.name} 
									position={a.location.coordinates} 
									keyboard={true}
									riseOnHover={true}
									riseOffset={30}
									icon={
										new Icon({
											iconUrl: a.type == 1 ? '/icons/PowerPlant.ico' : '/icons/Substation.ico', 
											iconSize: {
												x: 40,
												y: 40
											} as PointExpression
										})
									} 
									eventHandlers={{
										click: () => props.selectAsset(a.id)
									}}
								>
								</Marker>
							)
						})
					}
					
				</MapContainer>
			</div>
			
		</div>
	)
}

export default MiddlePanel;