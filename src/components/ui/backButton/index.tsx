import { FC } from 'react';
import style from './backButton.module.css';
import arrowLeft from '../../../assets/svg/arrow-left.svg';
import { Link, To } from 'react-router-dom';

interface BackButtonProps {
	to: To;
}

const BackButton: FC<BackButtonProps> = ({ to }) => {
	return (
		<Link to={to} className={style.back_button}>
			<img src={arrowLeft} alt='back arrow' />
			Back
		</Link>
	);
};

export default BackButton;
