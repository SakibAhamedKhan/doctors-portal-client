import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyAppointment = () => {
	const [user, loading, uError] = useAuthState(auth);
	const navigate = useNavigate();
	// if(loading){
	// 	return <Loading></Loading>;
	// }

	const {data:appointments, isLoading, error, refetch} = useQuery(['appointment',user], () => {
		return fetch(`http://localhost:5000/booking?patient=${user?.email}`,{
			method:'GET',
			headers:{
				'authorization': `Bearer ${localStorage.getItem('accessToken')}`
			}
		})
		.then(res => {
			console.log('res: ',res);
			if(res.status === 401 || res.status === 403){
				signOut(auth);
				localStorage.removeItem('accessToken');
				navigate('/');
			} 
			return res.json();
			});
	})
	return (
		<div>
			<h2 className='text-center text-secondary text-xl my-2'>My Appointment</h2>
			<div class="overflow-x-auto">
				<table class="table w-full">
					<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Date</th>
						<th>Time</th>
						<th>Treatment</th>
					</tr>
					</thead>
					<tbody>
						{
							appointments?.map((a,index) => {
								return(<tr key={index}>
									<th>{index+1}</th>
									<td>{a.patientName}</td>
									<td>{a.date}</td>
									<td>{a.slot}</td>
									<td>{a.treatment}</td>
								</tr>);
							})
						}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyAppointment;