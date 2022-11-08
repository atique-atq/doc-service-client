import React from 'react';
import faq from '../../../../src/assets/images/faq.png';

const FAQ = () => {
    return (
        <div className='lg:mx-24 shadow-2xl mt-12'>
            <h5 className="text-5xl font-bold text-green-700 font-sans text-center">FAQ</h5>
            <div className='flex sm:flex-col md:flex-row items-center justify-between align-middle'>
                <div className='w-11/12 p-5'>
                    <img src={faq} alt="frequently asked question" className='w-full' />
                </div>
                <div className='w-full'>
                    <div tabIndex={0} className="collapse collapse-arrow border-t border-base-300 bg-base-100">
                        <div className="collapse-title text-xl font-medium">
                            Which area Doctor have speciality?
                        </div>
                        <div className="collapse-content">
                            <p>Practiced in plastice surgery, general surgery over three years in Apollo Hospital Dhaka (Now knowned as Ever Care Hospital). Now after joining Health Ministry as an Assistant Surgeon, practicing in Pediatric section.</p>
                        </div>
                    </div>

                    <div tabIndex={1} className="collapse collapse-arrow border-t border-base-300 bg-base-100 ">
                        <div className="collapse-title text-xl font-medium">
                            When and where patients can come for visiting?
                        </div>
                        <div className="collapse-content">
                            <p>Patients can come at Upazila Health Complex, Shakhipur at office hour. Besides office hour Patients can come to local clinic for having consultancy. </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border-t border-base-300 bg-base-100">
                        <div className="collapse-title text-xl font-medium">
                            How to have an appointment?
                        </div>
                        <div className="collapse-content">
                            <p>People can come at Upazila health complex and have consultancy upon taking ticket. For private consultation besides office hour, people can book online appointment from web site. </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border-t border-base-300 bg-base-100">
                        <div className="collapse-title text-xl font-medium">
                            Which services are provided?
                        </div>
                        <div className="collapse-content">
                            <p>General Surgery, plastic surgery, Pediatric consultation. People can also have ultrasonogram and others test. </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FAQ;