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

function getAssetById (id: number) {
	return ASSET_TYPES[id];
}

function getDeviceById (id: number) {
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
							hoverable={true}
							size='fit'
							innerContent={
								// INCOMPLETE Don't forget to change the h2 style for cards!
								<div>
									<h2>
										{ a.name }
									</h2>
									{
										a.devices.map(d => {
											// INCOMPLETE I am going to change this section into a drop down component
											return (
												<Card
													hidden={true}
													hoverable={true}
													innerContent={
														<div>
															<h3>
																{d.name}
															</h3>
														</div>
													}
												></Card>
											)
										})
									}
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