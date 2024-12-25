import { FC } from 'react';
import style from '../favorites.module.css';
import ControlPanel from '../../../components/ordinary/controlPanel';
import RepositoryCard from '../../../components/ordinary/repositoryCard';

interface TableProps {}

const Table: FC<TableProps> = () => {
	return (
		<div className={style.table_container}>
			<ControlPanel />
			<div className={style.table__cards}>
				<RepositoryCard />
			</div>
		</div>
	);
};

export default Table;
