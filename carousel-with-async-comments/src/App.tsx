import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './page/MainPage';
import { Layout } from './components/Layout/Layout';
import { NotFoundPage } from './page/404';
import { PostPage } from './page/PostPage';

export const routesConfig = [
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{ index: true, element: <MainPage /> },
			{ path: '/post/:postID', element: <PostPage /> },
		],
	},
];

const router = createBrowserRouter(routesConfig);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
