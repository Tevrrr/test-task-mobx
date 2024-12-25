import { FC } from 'react';
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

const Repository: FC = () => {
	return (
		<Wrapper>
			<div className={'container-center ' + style.main_container}>
				<BackButton to={ROUTES.MAIN} />
				<div className={style.content_container}>
					<h2 className={style.content_container__title}>Профиль</h2>
					<div className={style.content_container__main}>
						<div className={style.main__header}>
							<div className={style.main__header__avatar}>
								<img
									alt='Изображение профиля'
									src='https://cdn.pixabay.com/photo/2023/03/15/20/46/background-7855413_1280.jpg'
								/>
							</div>
							<div className={style.main__header__data}>
								<div className={style.header__data__name}>
									tanya-ling/middle-russian-parser
								</div>
								<div
									className={style.header__data__description}>
									Программа для автоматической лемматизации и
									морфологического анализа русских текстов
									15—17 вв
								</div>
							</div>
						</div>
						<div className={style.main__data}>
							<DataCard
								iconAlt='star'
								iconSrc={starIcon}
								label='Количество звезд'
								value='1 329'
							/>
							<DataCard
								iconAlt='star'
								iconSrc={gitIcon}
								label='Количество звезд'
								value='1 329'
							/>
							<DataCard
								iconAlt='star'
								iconSrc={archiveIcon}
								label='Количество звезд'
								value='1 329'
							/>
							<DataCard
								iconAlt='star'
								iconSrc={terminalIcon}
								label='Количество звезд'
								value='1 329'
							/>
							<DataCard
								iconAlt='star'
								iconSrc={folderIcon}
								label='Количество звезд'
								value='1 329'
							/>
							<DataCard
								iconAlt='star'
								iconSrc={editIcon}
								label='Количество звезд'
								value='1 329'
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
			</div>
		</Wrapper>
	);
};

export default Repository;
