import { useEffect, useState } from 'react';

import { getProductById } from '../api';
import { useParams } from 'react-router-dom';

export default function ProductDetailPage() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	useEffect(() => {
		getProductById(id)
			.then((product) => {
				setProduct(product);
			})
			.catch((error) => {
				console.error('[getProductById error]', error);
			});
	}, [id]);

	if (!product) {
		return (
			<div className="flex justify-center items-center h-screen">
				Loading...
			</div>
		);
	}

	const handleImageChange = (index) => {
		setSelectedImageIndex(index);
	};

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
			<div className="flex flex-col md:flex-row -mx-4 dark:bg-gray-800 text-white p-6 rounded-lg shadow-md">
				<div className="md:flex-1 px-4">
					<div className="h-64 md:h-96 rounded-lg bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
						<img
							src={product.images[selectedImageIndex]}
							alt={product.title}
							className="h-full w-full object-contain rounded-lg"
						/>
					</div>
					{product.images.length > 1 && (
						<div className="flex -mx-2 mb-4">
							{product.images.map((image, index) => (
								<div key={index} className="flex-1 px-2">
									<button
										onClick={() => handleImageChange(index)}
										className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center overflow-hidden ${
											selectedImageIndex === index
												? 'ring-2 ring-indigo-300 ring-inset'
												: ''
										}`}>
										<img
											src={image}
											alt={`${product.title} ${index}`}
											className="h-full w-full object-contain rounded-lg"
										/>
									</button>
								</div>
							))}
						</div>
					)}
				</div>
				<div className="md:flex-1 px-4">
					<h2 className="mb-2 leading-tight tracking-tight font-bold text-indigo-600 text-2xl md:text-3xl">
						{product.title}
					</h2>
					<p className="text-gray-500 text-sm">
						By{' '}
						<span className="text-indigo-600 hover:underline">
							{product.brand}
						</span>
					</p>

					<div className="flex items-center space-x-4 my-4">
						<div>
							<div className="rounded-lg bg-gray-100 flex py-2 px-3">
								<span className="text-indigo-400 mr-1 mt-1">
									$
								</span>
								<span className="font-bold text-indigo-600 text-3xl">
									{product.price}
								</span>
							</div>
						</div>
						<div className="flex-1">
							<p className="text-green-500 text-xl font-semibold">
								Save {product.discountPercentage}%
							</p>
							<p className="text-gray-400 text-sm">
								Inclusive of all Taxes.
							</p>
						</div>
					</div>

					<p className="text-gray-500 mb-4">{product.description}</p>

					<div className="flex items-center mt-2.5 mb-5">
						{[...Array(5)].map((_, index) => (
							<svg
								key={index}
								className={`w-5 h-5 ${
									product.rating >= index + 0.5
										? 'text-yellow-300'
										: 'text-gray-300'
								}`}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
						))}
						<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
							{product.rating}
						</span>
					</div>

					<div className="flex py-4 space-x-4">
						<div className="relative">
							<div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
								Qty
							</div>
							<select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1 text-gray-800">
								{[...Array(product.stock).keys()].map(
									(index) => (
										<option key={index}>{index + 1}</option>
									)
								)}
							</select>

							<svg
								className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M8 9l4-4 4 4m0 6l-4 4-4-4"
								/>
							</svg>
						</div>

						<button
							type="button"
							className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
							Add to Cart
						</button>
					</div>

					<div className="mt-6">
						<h3 className="text-lg font-semibold mb-2">
							Product Details
						</h3>
						<ul className="list-disc list-inside text-gray-500">
							<li>Category: {product.category}</li>
							<li>Brand: {product.brand}</li>
							<li>SKU: {product.sku}</li>
							<li>Weight: {product.weight} kg</li>
							<li>
								Dimensions: {product.dimensions.width} x{' '}
								{product.dimensions.height} x{' '}
								{product.dimensions.depth} cm
							</li>
							<li>Warranty: {product.warrantyInformation}</li>
							<li>Shipping: {product.shippingInformation}</li>
							<li>Availability: {product.availabilityStatus}</li>
							<li>Return Policy: {product.returnPolicy}</li>
							<li>
								Minimum Order Quantity:{' '}
								{product.minimumOrderQuantity}
							</li>
							<li>Barcode: {product.meta.barcode}</li>
							<div className="flex justify-end">
								<img
									src={product.meta.qrCode}
									alt="QR Code"
									className="w-24 h-24 mt-2"
								/>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
