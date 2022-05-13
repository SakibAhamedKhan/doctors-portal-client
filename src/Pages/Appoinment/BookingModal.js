import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, date, setTreatment}) => {
	const {_id,name, slots} = treatment;

	const handleBooking = (event) => {
		event.preventDefault();
		const slot = event.target.slot.value;
		const name = event.target.name.value;
		const email = event.target.email.value;
		const phone = event.target.phone.value;
		console.log(_id,slot, name, email,phone);
		setTreatment(null)
	}
	return (
		<div>
			<input type="checkbox" id="booking-modal" class="modal-toggle" />
			<div class="modal modal-bottom sm:modal-middle">
			<div class="modal-box">
			<label for="booking-modal" class="btn btn-secondary text-white btn-sm btn-circle absolute right-2 top-2">✕</label>
				<h3 class="font-bold text-lg text-secondary text-center">{name}</h3>
				
				<form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
					<input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
					<select name='slot' class="select select-bordered w-full max-w-xs">
						{
							slots.map(slot => <option value={slot}>{slot}</option>)
						}
					</select>
					<input type="text" name='name' placeholder="Type here" class="input input-bordered w-full max-w-xs" required/>
					<input type="email" name='email' placeholder="Type here" class="input input-bordered w-full max-w-xs" required/>
					<input type="number" name='phone' placeholder="Type here" class="input input-bordered w-full max-w-xs" required/>
					<input type="submit" value='submit' placeholder="Type here" class="btn btn-secondary w-full max-w-xs text-white" required/>
				</form>
			</div>
			</div>
		</div>
	);
};

export default BookingModal;