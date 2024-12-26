import { FC, useEffect } from 'react';
import style from './repositories.module.css';
import Wrapper from '../../components/layouts/wrapper';
import Search from '../../components/ui/search';
import Table from './components/table';
import { observer } from 'mobx-react-lite';
import { RepositoriesStore } from '../../store/repositories';
import { useSearch } from '../../hook/useSearch';

const Repositories: FC = observer(() => {
	const { search } = useSearch();

	useEffect(() => {
		if (RepositoriesStore.loadingState !== 'pending') {
			RepositoriesStore.uploadData(search || '');
		}
	}, [search]);
	return (
		<Wrapper>
			<div className={'container-center ' + style.main_container}>
				<Search />
				{RepositoriesStore.loadingState === 'pending' && 'Loading...'}
				{RepositoriesStore.loadingState === 'success' && (
					<Table
						data={RepositoriesStore.data}
						totalCount={RepositoriesStore.totalCount}
					/>
				)}
				{RepositoriesStore.loadingState === 'error' && (
					<div>
						<h3>Error!</h3>
						<code>{JSON.stringify(RepositoriesStore.isError)}</code>
					</div>
				)}
			</div>
		</Wrapper>
	);
});

export default Repositories;
