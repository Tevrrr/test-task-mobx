import { useSearchParams } from 'react-router-dom';

const KEY = 'search';

export const useSearch = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const setSearch = (value: string | null) => {
		const params = new URLSearchParams(searchParams);

		if (value !== null && value) {
			params.set(KEY, value);
		} else {
			params.delete(KEY);
		}

		setSearchParams(params);
	};

	return {
		setSearch,
		search: searchParams.get(KEY),
	};
};
