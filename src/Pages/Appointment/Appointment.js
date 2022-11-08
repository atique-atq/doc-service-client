import React from 'react';
import toast from 'react-hot-toast';

const Appointment = () => {
    const handleAppointment = (event) => {
        event.preventDefault();
        toast.success('Appointment Successful!!', {
            position: "top-right"
        });
        event.target.reset();
    }
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row mx-20">
                    <div className="text-center lg:text-left mx-10">
                        <h5 className="text-5xl font-bold text-[rgb(52,203,203)] font-sans">Make Appointment!</h5>
                        <p className="py-8 text-xl">Ensuring hassle free services online appointment services are made for the patients. Doctors <strong> availability, exact timing, push notification </strong>  for reminding patients etc are set for hassle free services.</p>
                    </div>
                    <form className="card w-full  shadow-2xl bg-base-100" onSubmit={handleAppointment}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-cyan-600">Patient Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-cyan-600">Short Description of Problem</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-cyan-600">Appointment Date</span>
                                </label>
                                <input type="datetime-local" className="input input-bordered" required />
                            </div>

                            <input className='btn bg-[rgb(52,203,203)] hover:bg-green-700 border-0 mt-5' type="submit" value="Appointment" />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Appointment;