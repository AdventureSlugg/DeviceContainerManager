import { useState } from 'react';
import Card from '../../common/Card/Card';
import './LeftPanel.css';
import { getAssetTypeById, IAsset } from '../../../types/assets';
import { getDeviceTypeById } from '../../../types/devices';

interface LeftPanelProps {
	assets: IAsset[];
}

function LeftPanel (props: LeftPanelProps) {
	const [expandedAssets, setExpandedAssets] = useState<string[]>([]);

	return (
		<div className='leftPanel'>
			<h1>
				Asset List
			</h1>

			{
				props.assets.map(a => {
					return (
						<Card
							key={a.id}
							hoverable={true}
							size='fit'
							innerContent={
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
												return (
													<Card
														key={d.id}
														customColor='rgb(54, 80, 100)'
														hoverable={true}
														margin={'.5vh'}
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