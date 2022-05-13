import React, { useState } from 'react';
import chair from '../../../src/assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import appointmentBack from '../../assets/images/bg.png';

const AppointmentBanner = ({date, setDate}) => {
	

	return (
		<div style={{
			background:`url(${appointmentBack})`,
			backgroundPosition:'center center',
			backgroundSize: 'cover'
			
		}} className="hero min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse w-fit lg:px-12 mx-auto">
				<img src={chair} className="max-w-md rounded-lg shadow-2xl object-cover w-72 md:h-full md:w-96 mb-10 mx-2" alt='Dentist Chair'/>
				<div className='justify-self-center lg:mr-28'>
					<DayPicker 
					className='w-fit'
					mode='single'
					selected={date}
					onSelect={setDate}
					/>
				
				</div>
			</div>
		</div>
	);
};

export default AppointmentBanner;