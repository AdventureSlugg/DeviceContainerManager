import './App.css';

import React, { ReactNode } from 'react';

import ThreePanelLayout from './components/page-layouts/ThreePanelLayout/ThreePanelLayout';
import LeftPanel from './components/content-sections/LeftPanel/LeftPanel';
import MiddlePanel from './components/content-sections/MiddlePanel/MiddlePanel';
import RightPanel from './components/content-sections/RightPanel/RightPanel';

import { mockAssets } from './mockdata/mockdata';

function App() {
	return (
		<div className="App">
			<ThreePanelLayout
				rightPanel={ RightPanel() }
				middlePanel={ MiddlePanel() }
				leftPanel={ LeftPanel({assets: mockAssets}) }
			/>
		</div>
	);
}

export default App;
