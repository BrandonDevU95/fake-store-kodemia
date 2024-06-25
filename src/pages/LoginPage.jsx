import { login } from '../api';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	async function onSubmit(data) {
		try {
			const token = await login(data.username, data.password);
			window.localStorage.setItem('token', token);
			toast.success('Login successful');
			navigate('/products');
		} catch (error) {
			toast.error('Invalid username or password');
			console.error('[login error]', error);
		}
	}

	return (
		<main className="flex flex-col justify-center items-center w-full min-h-dvh">
			<h1 className="text-4xl font-bold text-center mb-4">Login</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="border border-white/50 text-black rounded p-4 flex flex-col gap-4 max-w-sm w-full">
				<input
					type="text"
					placeholder="Username"
					value="emilys"
					className="border border-white/50 rounded p-2"
					{...register('username', {
						required: {
							value: true,
							message: 'Username is required',
						},
					})}
				/>

				{errors.username && (
					<p className="text-red-400">{errors.username.message}</p>
				)}

				<input
					type="password"
					value="emilyspass"
					placeholder="Password"
					className="border border-white/50 rounded p-2"
					{...register('password', {
						required: {
							value: true,
							message: 'Password is required',
						},
					})}
				/>

				{errors.password && (
					<p className="text-red-400">{errors.password.message}</p>
				)}

				<button
					type="submit"
					className="bg-teal-500 font-bold p-2 text-black hover:bg-teal-300 rounded">
					Login
				</button>
			</form>
		</main>
	);
}
