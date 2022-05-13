import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	const { register, formState: { errors }, handleSubmit } = useForm();
	const [
		signInWithEmailAndPassword,
		eUser,
		eLoading,
		eError,
	  ] = useSignInWithEmailAndPassword(auth);

	let errorMessage;
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || '/';

	useEffect( () => {
		if(gUser || eUser){
			navigate(from, {replace:true});
		}
	},[eUser, gUser, from, navigate]);
	
	if(eLoading || gLoading){
		return <Loading></Loading>
	}

	if(gError || eError){
		errorMessage = <p className='text-red-500 mb-2'><small>{ gError?.message || eError?.message}</small></p>;
	}
	
	
	const onSubmit = data => {
		console.log(data);
		errorMessage='';
		signInWithEmailAndPassword(data.email, data.password);
	}

	return (
		<div className='flex h-screen justify-center items-center mx-4'>
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-center text-2xl font-bold">Login</h2>
					
					

					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input 
								type="email" 
								placeholder="Your Email"
								className="input input-bordered w-full max-w-xs"
								{...register("email", {
									required:{
										value: true,
										message: 'Email is Required'
									},
									pattern: {
										value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
										message: 'Provide a Valid Email'
									}
								})}
							/>
							<label className="label">
								
								{errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
								{errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
							</label>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input 
								type="password" 
								placeholder="Password"
								className="input input-bordered w-full max-w-xs"
								{...register("password", {
									required:{
										value: true,
										message: 'Password is Required'
									},
									minLength: {
										value: 6,
										message: 'Must be 6 characters or longers'
									}
								})}
							/>
							<label className="label">
								{errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
								{errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
							</label>
						</div>

						{
							errorMessage
						}

						<input className='btn text-white w-full max-w-xs' value='Login' type="submit" />
					</form>
					<p className='text-center'><small>New in Doctors Portal? <Link className='text-primary' to='/signup'>Create New Account</Link></small></p>

					<div className="divider">OR</div>

					<button
					onClick={() => {
						signInWithGoogle();
					}} 
					className="btn btn-outline"
					>Continue with Google</button>
				</div>
			</div>
		</div>
	);
};

export default Login;