import clsx from 'clsx';
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
		setError,
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
			setError('root.credentials', {
				type: 'manual',
				message: 'Invalid username or password',
			});
		}
	}

	return (
		<main className="flex flex-col justify-center items-center w-full min-h-dvh bg-gray-800">
			<h1 className="text-4xl font-bold text-center mb-4">Login</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={clsx(
					'border border-white/50 text-black rounded p-4 flex flex-col gap-4 max-w-sm w-full',
					{ 'border-red-500': errors.root?.credentials }
				)}>
				<input
					type="text"
					placeholder="Username"
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
					className="bg-gray-900 font-bold p-2 text-gray-100 hover:bg-gray-700 rounded">
					Login
				</button>
			</form>
		</main>
	);
}
