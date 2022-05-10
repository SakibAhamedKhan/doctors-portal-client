import React from 'react';
import Service from '../Service/Service';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import teeth from '../../../../assets/images/whitening.png'

const Services = () => {
	return (
		<div className='mt-20'>
			<h3 className='text-md text-primary text-center'>OUR SERVICES</h3>
			<h1 className='text-3xl text-center'>Services We Provide</h1>
			
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
				<Service img={fluoride} title="Fluoride Treatment" details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></Service>
				<Service img={cavity} title="Cavity Filling" details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></Service>
				<Service img={teeth} title="Teeth Whitening" details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></Service>
			</div>

		</div>
	);
};

export default Services;