import { format } from 'date-fns';
import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';



const BookingModal = ({treatment, date, setTreatment, refetch}) => {
	const {_id,name, slots} = treatment;
	const [user, loading, error] = useAuthState(auth);
	const formatedDate = format(date, 'PP');

	const handleBooking = (event) => {
		event.preventDefault();
		const slot = event.target.slot.value;
		
		const phone = event.target.phone.value;
		console.log(_id,slot,phone);
		const booking = {
			treatmentId: _id,
			treatment: name,
			date: formatedDate,
			slot,
			patient:user.email,
			patientName: user.displayName,
			phone
		}

		fetch('http://localhost:5000/booking', {
			method:'POST',
			headers:{
				'content-type':'application/json'
			},
			body: JSON.stringify(booking)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			//to close the modal
			if(data.success){
				toast.success(`Appointment is set, ${formatedDate} at ${slot}`);
			} else {
				toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`);
			}
			refetch();
			setTreatment(null);
		})

		
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