import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Contact = () => {
	return (
		<div className="hero min-h-screen" 
		style={{background: `url(${appointment})`}}>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-white">
				<div className="max-w-md">
					<p className='text-xl'>Contact Us</p>
					<h1 className="mb-5 text-3xl">Stay connected with us</h1>
					<form>
						<input type="email" placeholder="Email Address" className="input w-full max-w-xs text-black mb-4" required/>
						<input type="text" placeholder="Subject" className="input w-full max-w-xs text-black mb-4" required/>
						<textarea className="textarea w-full max-w-xs text-black mb-4" placeholder="Your message"></textarea>
					</form>
					<PrimaryButton>Submit</PrimaryButton>
				</div>
			</div>
		</div>
	);
};

export default Contact;