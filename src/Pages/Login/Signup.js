import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';


const Signup = () => {
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	const { register, formState: { errors }, handleSubmit } = useForm();
	const [
		createUserWithEmailAndPassword,
		eUser,
		eLoading,
		eError,
	  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
	
	const [updateProfile, updating, uError] = useUpdateProfile(auth);
	const navigate = useNavigate();  
	 
	let errorMessage;

	if(gUser || eLoading || updating){
		return <Loading></Loading>;
	}

	if(gUser || eUser){
		console.log(gUser || eUser);
	}

	if(gError || eError || uError){
		errorMessage = <p className='text-red-500 mb-2'><small>{ gError?.message || eError?.message || uError?.message}</small></p>;
	}
	

	const onSubmit = async data => {
		console.log(data);
		errorMessage = '';
		await createUserWithEmailAndPassword(data.email, data.password);
		await updateProfile({displayName: data?.name});
		navigate('/appointment');
	}
	return (
		<div className='flex h-screen justify-center items-center mx-4'>
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-center text-2xl font-bold">Signup</h2>
					
					

					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input 
								type="text" 
								placeholder="Your Name"
								class="input input-bordered w-full max-w-xs"
								{...register("name", {
									required:{
										value: true,
										message: 'Name is Required'
									},
								})}
							/>
							<label className="label">
								{errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
							</label>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input 
								type="email" 
								placeholder="Your Email"
								class="input input-bordered w-full max-w-xs"
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
								class="input input-bordered w-full max-w-xs"
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

						<input className='btn text-white w-full max-w-xs' value='Signup' type="submit" />
					</form>
					<p className='text-center'><small>Already have account? <Link className='text-primary' to='/login'>Login now</Link></small></p>

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

export default Signup;