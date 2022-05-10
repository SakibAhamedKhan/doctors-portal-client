import React from 'react';
import Service from '../Service/Service';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import teeth from '../../../../assets/images/whitening.png';
import treatment from '../../../../assets/images/treatment.png';
import PrimaryButton from '../../../Shared/PrimaryButton/PrimaryButton';


const Services = () => {
	return (
		<div className='mt-20'>
			<h3 className='text-md text-primary text-center'>OUR SERVICES</h3>
			<h1 className='text-3xl text-center'>Services We Provide</h1>
			
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 w-fit px-4 md:px-12 lg:px-12 mx-auto'>
				<Service img={fluoride} title="Fluoride Treatment" details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></Service>
				<Service img={cavity} title="Cavity Filling" details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></Service>
				<Service img={teeth} title="Teeth Whitening" details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></Service>
			</div>

			<div className="hero min-h-screen w-fit lg:px-12 mx-auto">
				<div className="hero-content flex-col lg:flex-row m-0 px-2">
					<img src={treatment} className="max-w-sm rounded-lg shadow-2xl lg:mx-12 w-full object-cover md:h-full md:w-96 mb-10"/>
					<div>
					<h1 className="text-5xl font-bold w-fit">Exceptional Dental Care, on Your Terms</h1>
					<p className="py-6 w-fit">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
					<PrimaryButton>Get Started</PrimaryButton>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Services;