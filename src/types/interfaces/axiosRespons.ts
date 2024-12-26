export interface AxiosResponse<T> {
	total_count: number;
	incomplete_results: boolean;
	items: T[];
}

export interface Error<T = unknown> {
	key: 'error';
	error: T;
}

export interface Result<T> {
	key: 'result';
	data: AxiosResponse<T>;
}
