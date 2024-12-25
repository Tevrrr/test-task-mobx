import { createBrowserRouter } from 'react-router-dom';
import Repositories from '../pages/repositories';
import Favorites from '../pages/favorites';
import Repository from '../pages/repositories/repository';

export enum ROUTES {
	MAIN = '/',
	FAVORITES = '/favorites',
	REPOSITORY = '/repository/',
}

export const router = createBrowserRouter([
	{
		path: ROUTES.MAIN,
		element: <Repositories />,
	},
	{
		path: ROUTES.FAVORITES,
		element: <Favorites />,
	},
	{
		path: `${ROUTES.REPOSITORY}:id`,
		element: <Repository />,
	},
]);
