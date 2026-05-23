import { getAssetTypeById, IAsset } from "../types/assets";
import { getDeviceTypeById, IDevice } from "../types/devices";
import { ILocation } from "../types/locations";

const DESCRIPTORS: string[] = ['Asotin', 'Lewiston', 'Pullman', 'Clarkston', 'Spokane']
const WORDS: string[] = ['Lincoln', 'Oak', 'Chimney', 'Reynolds'];
const EXTENSIONS: string[] = ['Street', 'Circle', 'Drive', 'Center'];

// const DESCRIPTORS: string[] = ['Asotin', 'Lewiston', 'Pullman', 'Clarkston', 'Spokane']

export const mockAssets: IAsset[] = createNMockAssets(12);

function createNMockAssets (n: number): IAsset[] {
	const assets: IAsset[] = [];

	for (let i = 0; i<=n; i++) {
		assets.push(creatMockAsset())
	}

	return assets;
}

function creatMockAsset (): IAsset {
	const assetTypeId = (Math.floor(Math.random() * 10) % 2);

	return {
		id: crypto.randomUUID(),
		name: randomName(assetTypeId),
		type: assetTypeId,
		location: randomLocation(),
		devices: createNMockDevices(Math.floor(Math.random() * 50))
	}
}

function createNMockDevices (n: number): IDevice[] {
	const devices: IDevice[] = [];

	for (let i = 0; i<=n; i++) {
		devices.push(createMockDevice())
	}

	return devices;
}

function createMockDevice (): IDevice {
	const typeId: number = Math.floor(Math.random() * 100) % 2;
	return {
		id: crypto.randomUUID(),
		name: randomDeviceName(typeId),
		type: typeId
	}
}

function randomDeviceName (deviceTypeId: number): string {
	const number = Math.floor(Math.random() * 100);
	const a = ["L", "M", "P"]
	return `${getDeviceTypeById(deviceTypeId)} ${a[number % 3]}-${number}`;
}

function randomName (assetTypeId: number): string {
	const assetType = getAssetTypeById(assetTypeId);
	const descriptor = DESCRIPTORS[Math.floor((Math.random() * 100)) % DESCRIPTORS.length];
	const number = Math.floor(Math.random() * 100);

	return `${descriptor}-${number} ${assetType}`
}

function randomLocation (): ILocation {
	
	// between 46 and 47
	const lat = 46.7 + (Math.random() / 10);

	// between -117 and -118
	const long = -117.22 + (Math.random() / 10);

	const street = `${WORDS[Math.floor(Math.random() * 10) % WORDS.length]}`
	const address = `${Math.floor(Math.random() * 1000)} ${street} ${EXTENSIONS[Math.floor(Math.random() * 10) % EXTENSIONS.length]}`
	const facilityName = `${street} Location`

	return {
		id: crypto.randomUUID(),
		facilityName: facilityName,
		address: address,
		coordinates: [lat, long]
	}
}