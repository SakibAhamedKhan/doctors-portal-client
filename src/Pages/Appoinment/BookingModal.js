import { format } from 'date-fns';
import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';



const BookingModal = ({treatment, date, setTreatment}) => {
	const {_id,name, slots} = treatment;
	const [user, loading, error] = useAuthState(auth);

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
		<div className=''>
			<input type="checkbox" id="booking-modal" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
			<div className="modal-box">
			<label htmlFor="booking-modal" className="btn btn-secondary text-white btn-sm btn-circle absolute right-2 top-2">✕</label>
				<h3 className="font-bold text-lg text-secondary text-center">{name}</h3>
				
				<form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
					<input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
					<select name='slot' className="select select-bordered w-full max-w-xs">
						{
							slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
						}
					</select>
					<input type="text" disabled value={user?.displayName || ''} name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
					<input type="email" disabled value={user?.email || ''} name='email' placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
					<input type="number" name='phone' placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
					<input type="submit" value='submit' placeholder="Type here" className="btn btn-secondary w-full max-w-xs text-white" required/>
				</form>
			</div>
			</div>
		</div>
	);
};

export default BookingModal;