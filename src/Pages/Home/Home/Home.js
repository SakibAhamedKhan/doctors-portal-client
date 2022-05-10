import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services/Services';
import Testimonial from '../Testimonial/Testimonial/Testimonial';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Info></Info>
			<Services></Services>
			<MakeAppointment />
			<Testimonial></Testimonial>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
};

export default Home;