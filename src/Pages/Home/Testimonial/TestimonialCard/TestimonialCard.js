import React from 'react';

const TestimonialCard = ({person}) => {
	return (
		<div className="card w-fit	mx-2 bg-base-100 shadow-xl justify-self-center px-2 mb-6">
			<div className="card-body">
				<h2 className="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
			</div>
			<div className='flex items-center mx-6 mb-6'>
				<div className="avatar mr-4">
					<div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
						<img src={person.image} />
					</div>
				</div>
				<div>
					<p>{person.name}</p>
					<p>{person.city}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;