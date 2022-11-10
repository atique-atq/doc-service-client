import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext);

    const handleAddService = () => {

    }

    return (
        <div>
            <div className="card flex-shrink-0 w-10/12 shadow-2xl bg-base-100 py-6 mx-auto px-10">
                <h6 className="text-3xl text-center font-bold py-0 my-0 text-green-700">Add a service</h6>
                <form onSubmit={handleAddService} className="card-body px-8">
                    <div className="form-control">
                        <input type="text" name='name' placeholder="Service Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="service Description" required></textarea>
                    </div>
                    <div className="form-control">
                        <input type="text" name='price' placeholder="enter service price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <input type="text" name='photoUrl' placeholder="give service photo URL" className="input input-bordered" />
                    </div>

                    <div className="form-control py-0 my-0">
                        <input className="btn btn-info hover:bg-success" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;