import { FC } from 'react';
import style from '../repositories.module.css';
import ControlPanel from '../../../components/ordinary/controlPanel';
import RepositoryCard from '../../../components/ordinary/repositoryCard';
import { Repository } from '../../../types/interfaces/repository';

interface TableProps {
	data: Repository[] | null;
	totalCount: number;
}

const Table: FC<TableProps> = ({ data, totalCount }) => {
	return (
		<div className={style.table_container}>
			<ControlPanel title={`Result: ${totalCount} repositories`} />
			<div className={style.table__cards}>
				{data &&
					data.map((item) => {
						return <RepositoryCard key={item.id} {...item} />;
					})}
			</div>
		</div>
	);
};

export default Table;
