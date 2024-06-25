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

export { login };
