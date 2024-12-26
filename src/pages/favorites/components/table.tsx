import { FC } from 'react';
import style from '../favorites.module.css';
import ControlPanel from '../../../components/ordinary/controlPanel';
import RepositoryCard from '../../../components/ordinary/repositoryCard';
import { observer } from 'mobx-react-lite';
import { FavoritesStore } from '../../../store/favorites';

const Table: FC = observer(() => {
	return (
		<div className={style.table_container}>
			<ControlPanel />
			<div className={style.table__cards}>
				{FavoritesStore.favorites.map((item) => (
					<RepositoryCard key={item.id} data={item} inFavorite />
				))}
			</div>
		</div>
	);
});

export default Table;
