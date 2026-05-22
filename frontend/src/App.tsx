import './App.css';

import React, { ReactNode } from 'react';

import ThreePanelLayout from './components/page-layouts/ThreePanelLayout/ThreePanelLayout';

function Temp (): ReactNode {
	return (
		<div>  </div>
	)
}

function App() {
	return (
		<div className="App">
			<ThreePanelLayout
				rightPanel={ Temp() }
				middlePanel={ Temp() }
				leftPanel={ Temp() }
			/>
		</div>
	);
}

export default App;
