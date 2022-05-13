import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Banner = () => {
	return (
		<div className="hero lg:mt-[-50px] min-h-screen w-fit lg:px-12 mx-auto">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img src={chair} className="max-w-md rounded-lg shadow-2xl object-cover w-full object-cover md:h-full md:w-96 mb-10 mx-2" />
				<div>
				<h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
				<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
				<PrimaryButton>Get Started</PrimaryButton>
				</div>
			</div>
		</div>
	);
};

export default Banner;