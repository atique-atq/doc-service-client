import React from 'react';
import logo from '../../../assets/logo.JPG';

const Footer = () => {
    return (
        <footer className="footer p-32 bg-grey text-info-content">
            <div>
                <img className='w-44' src={logo} alt="" />
                <p className='font-semibold'>Dr Suraya Zebin.<br />©2022. All rights reserved.</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href="/" className="link link-hover">Surgery</a>
                <a href="/" className="link link-hover">Radiology</a>
                <a href="/" className="link link-hover">General Practice</a>
                <a href="/" className="link link-hover">Therapy</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="/" className="link link-hover">About Me</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Jobs</a>
                {/* <a href="/" className="link link-hover">Press kit</a> */}
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;