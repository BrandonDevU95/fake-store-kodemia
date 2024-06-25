import { Link } from 'react-router-dom';

export default function HomePage() {
	return (
		<div>
			<h1 className="text-4xl font-bold text-center">Home Page</h1>
			<p className="text-center">This is the home page</p>
			<div>
				<Link to="/login" className="block text-center mt-4">
					Login
				</Link>
				<Link to="/products" className="block text-center mt-4">
					Products
				</Link>
				<Link to="/products/1" className="block text-center mt-4">
					Product 1
				</Link>
			</div>
		</div>
	);
}
