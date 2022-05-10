import React from 'react';
import quote from '../../../../assets/icons/quote.svg';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';

const Testimonial = () => {
	const testimonaiPersons = [
		{
			id: '1',
			name: 'Winson Herry',
			city: 'Califonia',
			feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
			image: `${people1}`
		},
		{
			id: '2',
			name: 'Asensio Silva',
			city: 'Madrid',
			feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
			image: `${people2}`
		},
		{
			id: '3',
			name: 'Vini Lam',
			city: 'Rome',
			feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
			image: `${people3}`
		},
	]
	return (
		<div className='my-16 px-4 md:px-12 lg:px-12'>
			<div className='flex justify-between mb-4 px-4 lg:px-12'>
				<div>
					<h3 className='text-secondary text-xl'>Testimonial</h3>
					<h2 className='text-3xl'>What Our Patients Says</h2>
				</div>
				<div>
					<img className='h-24' src={quote} alt="" />
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{
					testimonaiPersons.map(person => <TestimonialCard
						key={person.id}
						person={person}
					></TestimonialCard>)
				}
			</div>
		</div>
	);
};

export default Testimonial;