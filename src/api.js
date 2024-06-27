const API_URL = 'https://dummyjson.com';

async function login(username, password) {
	const response = await fetch(`${API_URL}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ username, password }),
	});
	const { token } = await response.json();
	if (!token) {
		throw new Error('Invalid username or password');
	} else {
		return token;
	}
}

async function getProducts() {
	const token = window.localStorage.getItem('token');
	const response = await fetch(`${API_URL}/products`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	const { products } = await response.json();
	return products;
}

export { login, getProducts };
