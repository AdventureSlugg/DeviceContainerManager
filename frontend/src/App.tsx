import './App.css';

import React, { ReactNode, useState } from 'react';

import ThreePanelLayout from './components/page-layouts/ThreePanelLayout/ThreePanelLayout';
import LeftPanel from './components/content-sections/LeftPanel/LeftPanel';
import MiddlePanel from './components/content-sections/MiddlePanel/MiddlePanel';
import RightPanel from './components/content-sections/RightPanel/RightPanel';

import { mockAssets } from './mockdata/mockdata';

function App() {
	const [selectedAsset, selectAsset] = useState<string>('');

	const setSelectedAsset = (id: string) => {
		selectAsset(id);

		// Scroll the asset into view
		const selectedAssetElement = document.getElementById(`${id}-card`);

		if (selectedAssetElement) {
			selectedAssetElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}
	}

	return (
		<div className="App">
			<ThreePanelLayout
				rightPanel={ RightPanel() }
				middlePanel={ MiddlePanel({
					assets: mockAssets,
					selectAsset: setSelectedAsset
				}) }
				leftPanel={ LeftPanel({
					assets: mockAssets,
					selectedAsset: selectedAsset,
					selectAsset: selectAsset
				}) }
			/>
		</div>
	);
}

export default App;
