import { Repository } from './repository';

export interface Sort {
	title: string;
	value: SortValue;
}

export interface SortValue {
	target: keyof Repository;
	order: SortOrder;
}

export type SortOrder = 'asc' | 'des';
