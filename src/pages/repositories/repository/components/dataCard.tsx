import { FC } from 'react';
import style from '../repository.module.css';

interface DataCardProps {
	iconSrc: string;
	iconAlt: string;
	value: string;
	label: string;
}

const DataCard: FC<DataCardProps> = ({ label, iconSrc, iconAlt, value }) => {
	return (
		<div className={style.main__data__item}>
			<div className={style.item__icon}>
				<img src={iconSrc} alt={iconAlt} />
			</div>
			<div className={style.item__content}>
				<div className={style.item__content__value}>{value}</div>
				<div className={style.item__content__description}>{label}</div>
			</div>
		</div>
	);
};

export default DataCard;
