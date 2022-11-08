import React from 'react';
import Appointment from '../../Appointment/Appointment';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Appointment></Appointment>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;