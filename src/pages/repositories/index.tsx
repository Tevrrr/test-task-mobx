import { FC, useEffect, useMemo } from 'react';
import style from './repositories.module.css';
import Wrapper from '../../components/layouts/wrapper';
import Search from '../../components/ui/search';
import Table from './components/table';
import { observer } from 'mobx-react-lite';
import { RepositoriesStore } from '../../store/repositories';
import { useSearch } from '../../hook/useSearch';
import { useSort } from '../../hook/useSort';

const Repositories: FC = observer(() => {
	const { search } = useSearch();
	const { sort } = useSort();

	useEffect(() => {
		if (RepositoriesStore.loadingState !== 'pending') {
			RepositoriesStore.uploadData(search || '');
		}
	}, [search]);

	const sortData = useMemo(() => {
		if (!sort || !RepositoriesStore.data) {
			return RepositoriesStore.data;
		}

		if (
			typeof RepositoriesStore.data[0][sort.target] === 'undefined' ||
			typeof RepositoriesStore.data[0][sort.target] === 'undefined'
		)
			return RepositoriesStore.data;

		return [...RepositoriesStore.data].sort((a, b) => {
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
	}, [RepositoriesStore.data, sort]);

	return (
		<Wrapper>
			<div className={'container-center ' + style.main_container}>
				<Search />
				{RepositoriesStore.loadingState === 'pending' && 'Loading...'}
				{RepositoriesStore.loadingState === 'success' && (
					<Table
						data={sortData}
						totalCount={RepositoriesStore.totalCount}
					/>
				)}
				{RepositoriesStore.loadingState === 'error' && (
					<div>
						<h3>Error!</h3>

						<code>{JSON.stringify(RepositoriesStore.isError)}</code>
					</div>
				)}

				{!search && RepositoriesStore.loadingState === 'idle' && (
					<div>
						<h3>Укажите запрос в поисковой строке!</h3>
					</div>
				)}
			</div>
		</Wrapper>
	);
});

export default Repositories;
