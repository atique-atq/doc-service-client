import React from 'react';
import Appointment from '../../Appointment/Appointment';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Appointment></Appointment>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;