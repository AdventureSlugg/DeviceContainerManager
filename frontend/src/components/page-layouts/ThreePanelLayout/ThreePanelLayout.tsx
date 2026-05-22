import { ReactNode } from 'react';
import './ThreePanelLayout.css';
import { Group, Panel } from 'react-resizable-panels';

interface ThreePanelLayoutProps {
	rightPanel: ReactNode;
	middlePanel: ReactNode;
	leftPanel: ReactNode;
}

function ThreePanelLayout (children: ThreePanelLayoutProps) {
	return (
		<Group>
			<Panel>
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
			<Panel>
				<div className='right fullHeight'>
					{
						children.rightPanel
					}
				</div>
				
			</Panel>
		</Group>
	)
}

export default ThreePanelLayout;