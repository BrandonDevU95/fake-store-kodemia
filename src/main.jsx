import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import ReactDOM from 'react-dom/client';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/login',
		element: <p>Login</p>,
	},
	{
		path: '/products',
		element: <p>Products</p>,
	},
	{
		path: '/products/:id',
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
