import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/products',
				element: <ProductsPage />,
			},
			{
				path: '/products/:id',
				element: <ProductDetailPage />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<Toaster />
		<RouterProvider router={router} />
	</>
);
