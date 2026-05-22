import { ReactNode } from 'react';
import './ThreePanelLayout.css';

interface ThreePanelLayoutProps {
	rightPanel: ReactNode;
	middlePanel: ReactNode;
	leftPanel: ReactNode;
}

function ThreePanelLayout (children: ThreePanelLayoutProps) {
	return (
		<div className='flex'>
			<div 
				className='left'
			>
				{
					children.leftPanel
				}
			</div>
			<div 
				className='middle'
			>
				{
					children.middlePanel
				}
			</div>
			<div 
				className='right'
			>
				{
					children.rightPanel
				}
			</div>
		</div>
	)
}

export default ThreePanelLayout;