import { FC } from 'react';
import style from '../repositories.module.css';
import ControlPanel from '../../../components/ordinary/controlPanel';
import RepositoryCard from '../../../components/ordinary/repositoryCard';
import { Repository } from '../../../types/interfaces/repository';
import { observer } from 'mobx-react-lite';
import { FavoritesStore } from '../../../store/favorites';

interface TableProps {
	data: Repository[] | null;
	favorites?: Repository[];
	totalCount: number;
}

const Table: FC<TableProps> = observer(({ data, totalCount }) => {
	const isInFavorites = (id: number): boolean => {
		if (!FavoritesStore.favorites) return false;
		return FavoritesStore.favorites.some((item) => {
			return item.id === id;
		});
	};

	return (
		<div className={style.table_container}>
			<ControlPanel title={`Result: ${totalCount} repositories`} />
			<div className={style.table__cards}>
				{data &&
					data.map((item) => {
						return (
							<RepositoryCard
								inFavorite={isInFavorites(item.id)}
								key={item.id}
								data={item}
							/>
						);
					})}
			</div>
		</div>
	);
});

export default Table;
