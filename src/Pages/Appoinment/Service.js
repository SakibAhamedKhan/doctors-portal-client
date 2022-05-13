import React from 'react';

const Service = ({service, setTreatment}) => {
	const {name, slots} = service;
	return (
		<div className="card lg:max-w-lg bg-base-100 shadow-xl">
			<div className="card-body mx-auto">
				<h2 className="text-2xl font-bold text-secondary text-center">{name}</h2>
				<p className='text-center'>{
					slots.length > 0 ?
					<span>{slots[0]}</span>
					:
					<span className='text-red-600'>Try Another day</span>
				}</p>
				<p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces':'space'} available</p>
				<div className="card-actions justify-center">

				<label htmlFor="booking-modal" className="btn modal-button btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary" disabled={slots.length===0} 
				onClick={() => setTreatment(service)}> Book Appointment</label>
				</div>
			</div>
		</div>
	);
};

export default Service;