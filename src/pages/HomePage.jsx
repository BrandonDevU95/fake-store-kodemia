import { useEffect, useState } from 'react';

import { getProducts } from '../api';

export default function HomePage() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts()
			.then((products) => {
				setProducts(products);
			})
			.catch((error) => {
				console.error('[getProducts error]', error);
			});
	}, []);

	if (!products.length) {
		return (
			<div className="flex justify-center items-center h-screen">
				Loading...
			</div>
		);
	}

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
			<header className="bg-gray-800 shadow w-full">
				<div className="container mx-auto py-6 px-4 text-center">
					<h1 className="text-5xl font-bold text-white">
						Welcome to Fake Store
					</h1>
					<p className="mt-2 text-gray-200 text-xl">
						Your one-stop shop for all things fake!
					</p>
				</div>
			</header>
			<main className="container mx-auto py-8 px-4">
				<section className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-800">
						Featured Products
					</h2>
					<p className="mt-2 text-gray-600">
						Check out some of our best products.
					</p>
				</section>
				<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.slice(10, 16).map((product, index) => (
						<div
							key={index}
							className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
							<img
								src={product.thumbnail}
								alt={product.title}
								className="w-full h-48 object-contain"
							/>
							<div className="p-4">
								<h3 className="mb-2 leading-tight tracking-tight font-bold text-gray-100 text-2xl md:text-2xl">
									{product.title}
								</h3>
								<p className="font-bold text-gray-200 text-xl">
									${product.price}
								</p>
								<div className="flex justify-end">
									<button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					))}
				</section>
			</main>
			<footer className="bg-gray-800 shadow w-full mt-auto">
				<div className="container mx-auto py-6 px-4">
					<p className="text-gray-200">
						&copy; 2024 Fake Store. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
