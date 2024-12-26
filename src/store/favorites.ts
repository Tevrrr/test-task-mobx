import { makeAutoObservable } from 'mobx';
import { Repository } from '../types/interfaces/repository';

class Favorites {
	favorites: Repository[] = [];

	constructor() {
		makeAutoObservable(this);
		this.getByCache();
	}

	addRepository(repo: Repository) {
		if (!this.favorites) return;

		if (this.favorites.some((item) => item.id === repo.id)) return;

		this.favorites = [...this.favorites, repo];
		this.updateCache();
	}
	delRepository(id: number) {
		if (!this.favorites) return;

		this.favorites = this.favorites.filter((item) => item.id !== id);
		this.updateCache();
	}
	getByCache() {
		const cache = localStorage.getItem('FavoritesCache');
		if (!cache) return null;

		const res = JSON.parse(cache) as Repository[];

		if (Array.isArray(res)) {
			this.favorites = res;
			return res;
		}
		return null;
	}
	updateCache() {
		localStorage.setItem('FavoritesCache', JSON.stringify(this.favorites));
	}
}

export const FavoritesStore = new Favorites();
