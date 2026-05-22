import { useState } from 'react';
import Card from '../../common/Card/Card';
import './LeftPanel.css';

const ASSET_TYPES: Record<number, string> = {
	0: 'Substation',
	1: 'Powerplant'
}

const DEVICE_TYPES: Record<number, string> = {
	0: 'SEL-21',
	1: 'SEL-900',
	2: 'SEL-123'
}

function getAssetTypeById (id: number) {
	return ASSET_TYPES[id];
}

function getDeviceTypeById (id: number) {
	return DEVICE_TYPES[id];
}

type AssetType = 0 | 1;

type DeviceType = 0 | 1 | 2;

interface IDevice {
	id: string;
	name: string;
	type: DeviceType;
}

interface ILocation {
	id: string;
	facilityName: string;
	address: string;
}

interface IAsset {
	id: string;
	name: string;
	type: AssetType;
	location: ILocation;
	devices: IDevice[];
}

const assets: IAsset[] = [
	{
		id: crypto.randomUUID(),
		name: 'Hydro-power plant',
		type: 0,
		location: {
			id: crypto.randomUUID(),
			facilityName: 'Zoe\'s Hydro-Electric Power Plant',
			address: '88 No address for you :P... This should actuall have it\'s own type, but maybe I\'ll do that later. REFACTOR'
		},
		devices: [
			{
				id: crypto.randomUUID(),
				name: 'Zoe\s Raspberry Pi',
				type: 0
			}
		]
	}
]

function LeftPanel () {
	const [expandedAssets, setExpandedAssets] = useState<string[]>([]);
	
	return (
		<div className='leftPanel'>
			<p>
				INCOMPLETE
			</p>
			<p>
				This section will contain a browsable list of dropdown Assets.
			</p>
			<ul>
				<li>
					Assets will contain a list of devices that can be configured. Based on the selected Asset/Device
				</li>
				<li>
					The right panel will open a configuration panel for the given selected item.
				</li>
			</ul>

			<h1>
				Asset List
			</h1>

			{
				assets.map(a => {
					return (
						<Card
							key={a.id}
							hoverable={true}
							size='fit'
							innerContent={
								// INCOMPLETE Don't forget to change the h2 style for cards!
								<div 
									className='cardContent'
								>
									<p>
										{ getAssetTypeById(a.type) }
									</p>

									<h2>
										{ a.name }
									</h2>
									
									<p>
										<b>Location:</b> { a.location.facilityName }
									</p>

									<p 
										className='button'
										onClick={() => {
											if (expandedAssets.includes(a.id)) {
												setExpandedAssets(expandedAssets.filter(id => id !== a.id))
											} else {
												setExpandedAssets([...expandedAssets, a.id])
											}
											
										}}
									> 
										{expandedAssets.includes(a.id) ? "Hide" : "Expand"} Details
									</p>
									
									<div 
										className={`devicesSection ${expandedAssets.includes(a.id) ? 'show' : 'hidden'}`}>
										<h3>
											Asset Devices
										</h3>
										{
											a.devices.map(d => {
												// INCOMPLETE I am going to change this section into a drop down component
												return (
													<Card
														key={d.id}
														customColor='rgb(54, 80, 100)'
														hoverable={true}
														innerContent={
															<div className='cardContent'>
																<h4>
																	{d.name}
																</h4>
																<p>
																	{ getDeviceTypeById(d.type) }
																</p>
															</div>
														}
													></Card>
												)
											})
										}
										</div>
								</div>
							}
						></Card>
					)
				})
			}
		</div>
	)
}

export default LeftPanel;