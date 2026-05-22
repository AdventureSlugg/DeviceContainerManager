import { ReactNode, useState } from 'react';
import './ThreePanelLayout.css';
import { Group, Panel } from 'react-resizable-panels';

interface ThreePanelLayoutProps {
	rightPanel: ReactNode;
	middlePanel: ReactNode;
	leftPanel: ReactNode;
}

function ThreePanelLayout (children: ThreePanelLayoutProps) {
	const [showRight, setShowRight] = useState<boolean>(true);
	return (
		<Group>
			<Panel minSize={'10vw'} maxSize={'25vw'}>
				<div className="left fullHeight">
					{
						children.leftPanel
					}	
				</div>
				
			</Panel>
			<Panel>
				<div className='middle fullHeight'>
					{
						children.middlePanel
					}
				</div>
			</Panel>
			{
				showRight ?
					<>
						<Panel minSize={'10vw'} maxSize={'25vw'}>
							<div className='right fullHeight'>
								{
									children.rightPanel
								}
							</div>
						</Panel>
					</>
					:
					<></>
			}
			
			
		</Group>
	)
}

export default ThreePanelLayout;