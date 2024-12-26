import { useSearchParams } from 'react-router-dom';
import { SortValue } from '../types/interfaces/sort';

export const useSort = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const setSort = ({ order, target }: SortValue) => {
		const params = new URLSearchParams(searchParams);
		if (params.get('target') === target && params.get('order') === order)
			return;
		params.set('target', target);
		params.set('order', order);

		setSearchParams(params);
	};

	const getSort = (): SortValue | null => {
		const params = new URLSearchParams(searchParams);
		const target = params.get('target');
		const order = params.get('order');
		if (target && order) return { target, order } as SortValue;
		return null;
	};

	return {
		setSort,
		sort: getSort(),
	};
};
