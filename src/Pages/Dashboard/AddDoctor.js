import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();

	const {data:services, isLoading} = useQuery('services', () => {
		return fetch('http://localhost:5000/service')
		.then(res => res.json())
	})

	if(isLoading){
		return <Loading></Loading>;
	}

	const onSubmit = async data => {
		
	}

	return (
		<div>
			<h2 className="text-2xl">Add a New Doctor</h2>



			<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input 
								type="text" 
								placeholder="Name"
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
								placeholder="Email"
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
						<div className="form-control w-full max-w-xs mb-6">
							<label className="label">
								<span className="label-text">Specialization</span>
							</label>
							<select {...register('speciality')} class="select select-bordered w-full max-w-xs" required>
								<option value=''>Who shot first?</option>
								{
									services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
								}
							</select>
							
						</div>
						<input className='btn text-white w-full max-w-xs' value='Add' type="submit" />
					</form>
		</div>
	);
};

export default AddDoctor;