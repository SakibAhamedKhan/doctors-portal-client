import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({children}) => {

	const [user, loading, error] = useAuthState(auth);
	const location = useLocation();
	const [sendEmailVerification, sending, vError] = useSendEmailVerification(auth);

	console.log(user);
	if(loading){
		return <Loading></Loading>;
	}
	if(!user){
		return <Navigate to='/login' state={{from:location}} replace></Navigate>
	}
	if(user.providerData[0]?.providerId==='password' && !user.emailVerified){
		return <div className='h-screen flex justify-center items-center flex-col mx-4'>
			<p className='mb-5 text-3xl text-red-500 text-center'>Your Account is not Verified. Check your mail box and verify your account!</p>
			<button onClick={ async() => {
				await sendEmailVerification();
				toast.success('Verification mail sended!');
			}} className='btn text-white'>Send Mail Verification Again</button>
		</div>
	}


	return children;
};

export default RequireAuth;