import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {BsLayoutSidebarInset} from 'react-icons/bs';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
	const [user] = useAuthState(auth);
	const [checked, setChecked] = useState(false);
	const [admin] = useAdmin(user);
	
	return (
		<div className="drawer drawer-mobile">
			<input id="dashboard-sidebar" type="checkbox" onClick={() => {
				setChecked(true);
			}} onBlur={()=>{
				setChecked(false);
			}} checked={checked} className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				<div className='flex items-center justify-end'>
					<label htmlFor="dashboard-sidebar" className="lg:hidden mr-6 text-2xl"><BsLayoutSidebarInset /></label>
				</div>
				<h2 className='text-3xl font-bold text-green-400'>Dashboard</h2>
				<Outlet></Outlet>
				
			
			</div> 
			<div className="drawer-side">
				<label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
				<ul className="menu p-4 overflow-y-auto w-10/12 lg:w-48 bg-base-100 text-base-content">
				<li><Link to='/dashboard'>My Appointment</Link></li>
				<li><Link to='/dashboard/review'>My Review</Link></li>
				<li><Link to='/dashboard/history'>My History</Link></li>
				{ admin && <>
					<li><Link to='/dashboard/users'>All Users</Link></li>
					<li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
				</>}
				</ul>
			
			</div>
		</div>
	);
};

export default Dashboard;