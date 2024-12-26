import { makeAutoObservable } from 'mobx';
import { Repository } from '../types/interfaces/repository';
import { getRepositories } from '../api/repository';
import { LoadingState } from '../types/types/loadingState';

interface CacheData {
	data: Repository[];
	totalCount: number;
}

class Repositories {
	data: null | Repository[] = null;
	isError: null | unknown = null;
	loadingState: LoadingState = 'idle';
	totalCount: number = 0;

	constructor() {
		makeAutoObservable(this);
	}

	uploadData(query: string) {
		if (!query) {
			console.error(
				'RepositoriesStore.uploadData: query не может быть пустым!'
			);
			this.data = [];
			return;
		}
		this.loadingState = 'pending';
		getRepositories({ query }).then((result) => {
			if (result.key === 'error') {
				this.data = null;
				this.isError = result.error;
				this.loadingState = 'error';
				this.totalCount = 0;
				return;
			}
			const { items, total_count } = result.data;

			this.data = items;
			this.isError = null;
			this.loadingState = 'success';
			this.totalCount = total_count;
			localStorage.setItem(
				'RepositoriesCache',
				JSON.stringify({
					data: items,
					totalCount: total_count,
				} as CacheData)
			);
		});
	}

	getById(id: number) {
		if (!this.data || !this.data.length) {
			const cache = this.getByCache();
			if (!cache) return null;
			this.saveDataByCache(cache);
		}

		if (!this.data) return null;

		const res = this.data.find((item) => {
			return item.id === id;
		});
		if (!res) return null;
		return res;
	}

	getByCache() {
		const cache = localStorage.getItem('RepositoriesCache');
		if (!cache) return null;

		const res = JSON.parse(cache) as CacheData;

		if (res.data && res.totalCount) return res;
		return null;
	}

	saveDataByCache({ data, totalCount }: CacheData) {
		this.data = data;
		this.totalCount = totalCount;
	}
}

export const RepositoriesStore = new Repositories();
