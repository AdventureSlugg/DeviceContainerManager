import './MiddlePanel.css'

function MiddlePanel () {
	return (
		<div className="middlePanel">
			<p>
				INCOMPLETE
			</p>
			<p>
				This section will contain the following:
			</p>
			<ul>
				<li>
					A search bar that will highlight requested assets/devices/locations
				</li>
				<li>
					A filter panel that allows you to filter by asset type, warning status, and version
				</li>
				<li>
					A node graph of the assets in the grid network.
				</li>
			</ul>
		</div>
	)
}

export default MiddlePanel;