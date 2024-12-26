import { Sort } from '../types/interfaces/sort';
// full_name
export const SORTS: Sort[] = [
	{
		title: 'По возрастанию звезд',
		value: { target: 'stargazers_count', order: 'asc' },
	},
	{
		title: 'По убыванию звезд',
		value: { target: 'stargazers_count', order: 'des' },
	},
	{
		title: 'По алфавиту от А',
		value: { target: 'full_name', order: 'asc' },
	},
	{
		title: 'По алфавиту от Я',
		value: { target: 'full_name', order: 'des' },
	},
];
