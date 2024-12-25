import { FC } from 'react';
import style from './repositoryCard.module.css';
import starIcon from '../../../assets/svg/star.svg';
import gitIcon from '../../../assets/svg/git.svg';
import heartIcon from '../../../assets/svg/heart.svg';
import linkIcon from '../../../assets/svg/link.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../consts/routes';

interface RepositoryCardProps {}

const RepositoryCard: FC<RepositoryCardProps> = () => {
	return (
		<div className={style.table__card}>
			<div className={style.card__content}>
				<div className={style.card__header}>
					<div className={style.header__avatar}>
						<img
							src='https://cdn.pixabay.com/photo/2023/03/15/20/46/background-7855413_1280.jpg'
							alt='avatar'
						/>
					</div>
					<div className={style.header__stats}>
						<div className={style.header__stats__item}>
							<img src={starIcon} alt='star icon' /> 1 329
						</div>
						<div className={style.header__stats__item}>
							<img src={gitIcon} alt='git icon' /> 234
						</div>
					</div>
				</div>
				<div className={style.card__body}>
					<div className={style.card__body__teg}>@tinghuiz</div>
					<a href='' className={style.card__body__link}>
						tinghuiz/SfMLearner
					</a>
				</div>
			</div>
			<div className={style.card__actions}>
				<div className={style.card__actions__buttons}>
					<button>
						<img src={heartIcon} alt='heart icon' />
					</button>
					<button>
						<img src={linkIcon} alt='link icon' />
					</button>
				</div>
				<Link
					to={ROUTES.REPOSITORY + '2'}
					className={style.card__actions__details}>
					Подробнее
				</Link>
			</div>
		</div>
	);
};

export default RepositoryCard;
