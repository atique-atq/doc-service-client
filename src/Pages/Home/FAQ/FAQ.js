import React from 'react';
import faq from '../../../../src/assets/images/faq.png';

const FAQ = () => {
    return (
        <div className='lg:mx-24 shadow-2xl mt-12'>
            <h5 className="text-5xl font-bold text-green-700 font-sans text-center">FAQ</h5>
            <div className='flex items-center justify-between'>
                <div>
                    <img src={faq} alt="frequently asked question" className='w-full p-4' />
                </div>
                <div>
                    <div tabIndex={0} className="collapse collapse-arrow border-t border-base-300 bg-base-100 my-5">
                        <div className="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow border-t border-base-300 bg-base-100 ">
                        <div className="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border-t border-base-300 bg-base-100">
                        <div className="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border-t border-base-300 bg-base-100">
                        <div className="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div className="collapse-content">
                            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FAQ;