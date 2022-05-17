import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import useAdmin from '../../hooks/useAdmin';
import { signOut } from 'firebase/auth';


const RequireAdmin = ({children}) => {
	const [user, loading, error] = useAuthState(auth);
	const [admin, adminLoading] = useAdmin(user);
	const location = useLocation();
	const [sendEmailVerification, sending, vError] = useSendEmailVerification(auth);

	console.log(user);
	if(loading || adminLoading){
		return <Loading></Loading>;
	}
	if(!user || !admin){
		signOut(auth);
		return <Navigate to='/login' state={{from:location}} replace></Navigate>
	}
	


	return children;
};

export default RequireAdmin;