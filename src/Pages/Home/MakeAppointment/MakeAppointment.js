import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
	return (
		<selection style={{
			background: `url(${appointment})`
		}} className='flex justify-center items-center mt-20'>
			<div className='flex-1 hidden lg:block'>
				<img className='mt-[-130px]' src={doctor} alt="" />
			</div>
			<div className='flex-1 p-6 lg:p-0'>
				<h3 className='text-xl text-primary font-bold mb-2'>Appointment</h3>
				<h2 className='text-3xl text-white mb-2'>Make an Appointment Today</h2>
				<p className='text-white mb-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
				<PrimaryButton>Get Appointment Now</PrimaryButton>
			</div>
		</selection>
	);
};

export default MakeAppointment;