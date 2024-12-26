import { FC, useLayoutEffect, useState } from 'react';
import style from './repository.module.css';
import Wrapper from '../../../components/layouts/wrapper';
import BackButton from '../../../components/ui/backButton';
import starIcon from '../../../assets/svg/star.svg';
import gitIcon from '../../../assets/svg/git.svg';
import archiveIcon from '../../../assets/svg/archive.svg';
import terminalIcon from '../../../assets/svg/terminal.svg';
import folderIcon from '../../../assets/svg/folder.svg';
import editIcon from '../../../assets/svg/edit.svg';
import heartIcon from '../../../assets/svg/heart.svg';
import linkIcon from '../../../assets/svg/link.svg';
import DataCard from './components/dataCard';
import { ROUTES } from '../../../consts/routes';
import { useParams } from 'react-router-dom';
import { Repository } from '../../../types/interfaces/repository';
import { RepositoriesStore } from '../../../store/repositories';
import { observer } from 'mobx-react-lite';
import { formatDate } from '../../../helpers/formatDate';

const RepositoryID: FC = observer(() => {
	const { id } = useParams<{ id: string }>();
	const [data, setData] = useState<Repository | null>(null);

	useLayoutEffect(() => {
		if (!data && id) {
			setData(RepositoriesStore.getById(Number.parseInt(id)));
		}
	}, [id]);
	return (
		<Wrapper>
			<div className={'container-center ' + style.main_container}>
				<BackButton to={ROUTES.MAIN} />
				{data ? (
					<div className={style.content_container}>
						<h2 className={style.content_container__title}>
							Профиль
						</h2>
						<div className={style.content_container__main}>
							<div className={style.main__header}>
								<a href={data.owner.html_url}>
									<div className={style.main__header__avatar}>
										<img
											alt='Изображение профиля'
											src={data.owner.avatar_url}
										/>
									</div>
								</a>

								<div className={style.main__header__data}>
									<div className={style.header__data__name}>
										{data?.full_name}
									</div>
									<div
										className={
											style.header__data__description
										}>
										{data.description}
									</div>
								</div>
							</div>
							<div className={style.main__data}>
								<DataCard
									iconAlt='star'
									iconSrc={starIcon}
									label='Количество звезд'
									value={data.stargazers_count.toLocaleString(
										'ru-RU'
									)}
								/>
								<DataCard
									iconAlt='star'
									iconSrc={gitIcon}
									label='Количестсво форков'
									value={data.forks_count.toLocaleString(
										'ru-RU'
									)}
								/>
								<DataCard
									iconAlt='star'
									iconSrc={archiveIcon}
									label='В архиве'
									value={data.archived ? 'Да' : 'Нет'}
								/>
								<DataCard
									iconAlt='star'
									iconSrc={terminalIcon}
									label='Язык'
									value={data.language}
								/>
								<DataCard
									iconAlt='star'
									iconSrc={folderIcon}
									label='Cоздано'
									value={formatDate(data.created_at)}
								/>
								<DataCard
									iconAlt='star'
									iconSrc={editIcon}
									label='Изменено'
									value={formatDate(data.updated_at)}
								/>
							</div>
						</div>
						<div className={style.content_container__divider}></div>
						<div className={style.content_container__actions}>
							<div
								className={
									style.content_container__actions__buttons
								}>
								<button>
									<img src={linkIcon} alt='link icon' />
								</button>
								<button>
									<img src={heartIcon} alt='heart icon' />
								</button>
							</div>
							<div className={style.actions__button_open}>
								Открыть репотизторий
							</div>
						</div>
					</div>
				) : (
					'404'
				)}
			</div>
		</Wrapper>
	);
});

export default RepositoryID;
