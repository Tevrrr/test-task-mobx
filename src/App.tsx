import { RouterProvider } from 'react-router-dom';
import { router } from './consts/routes';

function App() {
	return (
		<div>
			<RouterProvider router={router} key={window.location.pathname} />
		</div>
	);
}

export default App;
