import React from 'react';
import useTitle from '../../../hooks/useTitle';
import './NoPageFound.css'

const NoPageFound = () => {
    useTitle('404');
    return (
        <div className='nopage-container'>
            <h1>404</h1>
            <h2>No Page Found</h2>

        </div>
    );
};

export default NoPageFound;