import React from 'react';
import { BiTime } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import call from '../../../assets/icons/phone.svg';


const Info = () => {
	return (
		<div className='px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
			<div class="card lg:card-side bg-gradient-to-r from-secondary to-primary text-white shadow-xl">
				<figure className='pt-5 lg:pl-5'><img src={clock} alt="" /></figure>
				<div class="card-body">
					<h2 class="card-title">Opening Hours</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
					<div class="card-actions justify-end">
					</div>
				</div>
			</div>
			<div class="card lg:card-side bg-accent text-white shadow-xl">
				<figure className='pt-5 lg:pl-5'><img src={location} alt="" /></figure>
				<div class="card-body">
					<h2 class="card-title">Visit our location</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
					<div class="card-actions justify-end">
					</div>
				</div>
			</div>
			<div class="card lg:card-side bg-gradient-to-r from-secondary to-primary text-white shadow-xl">
				<figure className='pt-5 lg:pl-5'><img src={call} alt="" /></figure>
				<div class="card-body">
					<h2 class="card-title">Contact us now</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
					<div class="card-actions justify-end">
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;

			// <div class="grid grid-rows-4  lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1">
			// 	<div class="card card-side bg-gradient-to-r from-secondary to-primary shadow-xl text-white p-4">
			// 		<figure><BiTime /></figure>
			// 		<div class="card-body">
			// 			<h2 class="card-title">Opening Hours</h2>
			// 			<p>Lorem Ipsum is simply dummy text of the pri</p>
			// 			<div class="card-actions justify-end">
			// 			</div>
			// 		</div>
			// 	</div>
			// 	<div class="card card-side bg-accent shadow-xl text-white p-4">
			// 		<figure><MdLocationOn /></figure>
			// 		<div class="card-body">
			// 			<h2 class="card-title">Visit our location</h2>
			// 			<p>Brooklyn, NY 10036, United States</p>
			// 			<div class="card-actions justify-end">
			// 			</div>
			// 		</div>
			// 	</div>
			// 	<div class="card card-side bg-gradient-to-r from-secondary to-primary shadow-xl  text-white p-4">
			// 		<figure ><FiPhoneCall className='py-6' /></figure>
			// 		<div class="card-body">
			// 			<h2 class="card-title">Contact us now</h2>
			// 			<p>+000 123 456789</p>
			// 			<div class="card-actions justify-end">
			// 			</div>
			// 		</div>
			// 	</div>

			// </div>