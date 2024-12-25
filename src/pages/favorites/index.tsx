import { FC } from 'react';
import style from './favorites.module.css';
import Wrapper from '../../components/layouts/wrapper';
import Table from './components/table';
import BackButton from '../../components/ui/backButton';
import { ROUTES } from '../../consts/routes';

const Favorites: FC = () => {
	return (
		<Wrapper>
			<div className={'container-center ' + style.main_container}>
				<BackButton to={ROUTES.MAIN} />
				<Table />
			</div>
		</Wrapper>
	);
};

export default Favorites;
