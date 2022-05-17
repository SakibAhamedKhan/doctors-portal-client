import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
	const navigate = useNavigate();
	const {data: users, isLoading, refetch} = useQuery('user', () => {
		return fetch(`http://localhost:5000/user`,{
			method:'GET',
			headers:{
				'authorization': `Bearer ${localStorage.getItem('accessToken')}`
			}
		})
		.then(res => {
			console.log(res);
			if(res.status === 403){
				signOut(auth);
				localStorage.removeItem('accessToken');
				navigate('/');
			}
			return res.json();
		});
	})

	if(isLoading){
		return <Loading></Loading>;
	}
	console.log(users);
	return (
		<div>
			<h2 className='text-center text-secondary text-xl my-2'>All users: {users.length}</h2>
			<div class="overflow-x-auto">
				<table class="table w-full">
					<thead>
					<tr>
						<th></th>
						<th>User</th>
						<th>Job</th>
						<th>Remove</th>
					</tr>
					</thead>
					<tbody>
					{
						users?.map((user,index)=> <UserRow refetch={refetch} key={index} index={index} user={user}></UserRow>)
					}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;