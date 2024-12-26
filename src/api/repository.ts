import { Repository } from '../types/interfaces/repository';
import { AxiosResponse, Error, Result } from '../types/interfaces/axiosRespons';
import { $api } from '.';

export const getRepositories = async ({
	query,
	perPage = 30,
}: {
	query: string;
	perPage?: number;
}): Promise<Error | Result<Repository>> => {
	try {
		const result = await $api.get<AxiosResponse<Repository>>(
			`search/repositories?q=${query}&per_page=${perPage}`
		);

		return { key: 'result', data: result.data };
	} catch (error) {
		return { key: 'error', error };
	}
};
