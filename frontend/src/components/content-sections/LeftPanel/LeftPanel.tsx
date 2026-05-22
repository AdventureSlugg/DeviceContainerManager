import './LeftPanel.css';

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
		</div>
	)
}

export default LeftPanel;