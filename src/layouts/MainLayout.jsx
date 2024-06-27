import { Link, Outlet, useNavigate } from 'react-router-dom';

import { useState } from 'react';

export default function MainLayout() {
	const links = [
		{ name: 'Home', path: '/', authRequired: false },
		{ name: 'Products', path: '/products', authRequired: true },
		{ name: 'Login', path: '/login', authRequired: false },
	];
	const navigate = useNavigate();

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const isAuth = !!window.localStorage.getItem('token');

	function handleLogout() {
		window.localStorage.removeItem('token');
		navigate('/');
	}

	return (
		<main>
			<nav className="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 dark:bg-gray-800 shadow">
				<div className="container flex flex-wrap justify-between items-center mx-auto">
					<a href="/" className="flex items-center">
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							Fake Store
						</span>
					</a>

					<div className="flex items-center">
						<button
							id="menu-toggle"
							type="button"
							className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
							onClick={toggleMobileMenu}>
							<span className="sr-only">Open main menu</span>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</button>
					</div>

					<div
						className={`w-full md:block md:w-auto ${
							isMobileMenuOpen ? '' : 'hidden'
						}`}
						id="mobile-menu">
						<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
							{links.map((link, index) => {
								if (link.authRequired && !isAuth) {
									return null;
								}
								if (isAuth && link.path === '/login')
									return null;

								return (
									<li key={index}>
										<Link
											to={link.path}
											className="block py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300">
											{link.name}
										</Link>
									</li>
								);
							})}
							{isAuth && (
								<li>
									<button
										className="block py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300"
										onClick={handleLogout}>
										Logout
									</button>
								</li>
							)}
						</ul>
					</div>
				</div>
			</nav>
			<Outlet />
		</main>
	);
}
