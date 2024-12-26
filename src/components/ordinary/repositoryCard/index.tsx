import { FC } from 'react';
import style from './repositoryCard.module.css';
import starIcon from '../../../assets/svg/star.svg';
import gitIcon from '../../../assets/svg/git.svg';
import heartIcon from '../../../assets/svg/heart.svg';
import heartAddIcon from '../../../assets/svg/heart-add.svg';
import linkIcon from '../../../assets/svg/link.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../consts/routes';
import { Repository } from '../../../types/interfaces/repository';
import { FavoritesStore } from '../../../store/favorites';
import { observer } from 'mobx-react-lite';
import { useCopy } from '../../../hook/useCopy';

interface RepositoryCardProps {
	inFavorite?: boolean;
	data: Repository;
}

const RepositoryCard: FC<RepositoryCardProps> = observer(
	({ data, inFavorite = false }) => {
		const {
			full_name,
			svn_url,
			stargazers_count,
			forks_count,
			id,
			owner: { login, avatar_url, html_url },
		} = data;
		const { isCopied, onCopy } = useCopy();

		const onCopyHandler = async () => {
			if (!data) return;

			onCopy(svn_url);
		};

		const clickFavoriteHandler = () => {
			if (inFavorite) {
				console.log('del');
				FavoritesStore.delRepository(id);
			} else {
				console.log('add');

				FavoritesStore.addRepository(data);
			}
		};

		return (
			<div className={style.table__card}>
				<div className={style.card__content}>
					<div className={style.card__header}>
						<a href={html_url}>
							<div className={style.header__avatar}>
								<img src={avatar_url} alt='avatar' />
							</div>
						</a>
						<div className={style.header__stats}>
							<div className={style.header__stats__item}>
								<img src={starIcon} alt='star icon' />{' '}
								{stargazers_count.toLocaleString('ru-RU')}
							</div>
							<div className={style.header__stats__item}>
								<img src={gitIcon} alt='git icon' />{' '}
								{forks_count.toLocaleString('ru-RU')}
							</div>
						</div>
					</div>
					<div className={style.card__body}>
						<div className={style.card__body__teg}>@{login}</div>
						<a href={svn_url} className={style.card__body__link}>
							{full_name}
						</a>
					</div>
				</div>
				<div className={style.card__actions}>
					<div className={style.card__actions__buttons}>
						<button onClick={clickFavoriteHandler}>
							{inFavorite ? (
								<img src={heartAddIcon} alt='heart add icon' />
							) : (
								<img src={heartIcon} alt='heart icon' />
							)}
						</button>
						<button
							className={`${isCopied && style.copied}`}
							onClick={onCopyHandler}>
							<img src={linkIcon} alt='link icon' />
						</button>
					</div>
					<Link
						to={ROUTES.REPOSITORY + id}
						className={style.card__actions__details}>
						Подробнее
					</Link>
				</div>
			</div>
		);
	}
);

export default RepositoryCard;
