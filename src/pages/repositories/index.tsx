import { FC } from 'react';
import style from './repositories.module.css';
import Wrapper from '../../components/layouts/wrapper';
import Search from '../../components/ui/search';
import Table from './components/table';

const Repositories: FC = () => {
	return (
		<Wrapper>
			<div className={'container-center ' + style.main_container}>
				<Search />
				<Table />
			</div>
		</Wrapper>
	);
};

export default Repositories;
