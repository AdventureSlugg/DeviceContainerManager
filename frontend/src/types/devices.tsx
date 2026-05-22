type DeviceType = 0 | 1 | 2;

const DEVICE_TYPES: Record<number, string> = {
	0: 'SEL-21',
	1: 'SEL-900',
	2: 'SEL-123'
}

export function getDeviceTypeById (id: number) {
	return DEVICE_TYPES[id];
}

export interface IDevice {
	id: string;
	name: string;
	type: DeviceType;
}