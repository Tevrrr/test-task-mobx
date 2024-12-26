import { FC, useMemo } from 'react';
import style from '../favorites.module.css';
import ControlPanel from '../../../components/ordinary/controlPanel';
import RepositoryCard from '../../../components/ordinary/repositoryCard';
import { observer } from 'mobx-react-lite';
import { FavoritesStore } from '../../../store/favorites';
import { useSort } from '../../../hook/useSort';

const Table: FC = observer(() => {
	const { sort } = useSort();

	const sortFavorites = useMemo(() => {
		if (!sort || !FavoritesStore.favorites) {
			return FavoritesStore.favorites;
		}

		if (
			typeof FavoritesStore.favorites[0][sort.target] === 'undefined' ||
			typeof FavoritesStore.favorites[0][sort.target] === 'undefined'
		)
			return FavoritesStore.favorites;

		return [...FavoritesStore.favorites].sort((a, b) => {
			const aValue = a[sort.target];
			const bValue = b[sort.target];
			if (typeof aValue === 'number' && typeof bValue === 'number') {
				if (sort.order === 'asc') return aValue - bValue;
				return bValue - aValue;
			}
			if (typeof aValue === 'string' && typeof bValue === 'string') {
				if (sort.order === 'asc') return aValue.localeCompare(bValue);
				return bValue.localeCompare(aValue);
			}
			return 0;
		});
	}, [FavoritesStore.favorites, sort]);

	return (
		<div className={style.table_container}>
			<ControlPanel />
			<div className={style.table__cards}>
				{sortFavorites.map((item) => (
					<RepositoryCard key={item.id} data={item} inFavorite />
				))}
			</div>
		</div>
	);
});

export default Table;
