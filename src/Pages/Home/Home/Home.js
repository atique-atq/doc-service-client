import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Appointment from '../../Appointment/Appointment';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
    useTitle('Home')
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