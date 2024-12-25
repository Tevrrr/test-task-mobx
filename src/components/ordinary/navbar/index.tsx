import { FC } from 'react';
import style from './navbar.module.css';
import searchIcon from '../../../assets/svg/search.svg';
import favoriteIcon from '../../../assets/svg/favorite.svg';
import accountIcon from '../../../assets/svg/account.svg';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '../../../consts/routes';

const Navbar: FC = () => {
	return (
		<header className={style.navbar}>
			<nav className={'container-center'}>
				<div className={style.navbar__container}>
					<NavLink
						to={ROUTES.MAIN}
						className={({ isActive }) =>
							`${style.navbar__logo} ${
								isActive && 'cursor-default'
							}`
						}>
						<img src={searchIcon} alt='search icon' />
						<span className={style.navbar__logo__text}>
							GitHubSearch
						</span>
					</NavLink>
					<div className={style.navbar__actions}>
						<NavLink
							to={ROUTES.FAVORITES}
							className={({ isActive }) =>
								`${style.actions__favorite_button} ${
									isActive &&
									style.actions__favorite_button_action
								}  ${isActive && 'cursor-default'}`
							}>
							<img src={favoriteIcon} alt='search icon' />
							<div
								className={
									style.actions__favorite_button__counter
								}>
								4
							</div>
						</NavLink>
						<a href='#' className={style.actions__account_button}>
							<div
								className={
									style.actions__account_button__container
								}>
								<img src={accountIcon} alt='search icon' />
							</div>
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;