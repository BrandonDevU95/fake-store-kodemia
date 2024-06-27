import { toast } from 'sonner';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
	const navigate = useNavigate();

	useEffect(() => {
		const token = window.localStorage.getItem('token');
		if (!token) {
			toast.error('You must be logged in to access this page');
			navigate('/login');
		}
	}, [navigate]);
}
