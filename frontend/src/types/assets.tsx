import { IDevice } from "./devices";
import { ILocation } from "./locations";

type AssetType = 0 | 1;

export const ASSET_TYPES: Record<number, string> = {
	0: 'Substation',
	1: 'Powerplant'
}

export function getAssetTypeById (id: number) {
	return ASSET_TYPES[id];
}

export interface IAsset {
	id: string;
	name: string;
	type: AssetType | number;
	location: ILocation;
	devices: IDevice[];
}