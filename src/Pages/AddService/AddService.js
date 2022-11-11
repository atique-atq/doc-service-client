import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';


const AddService = () => {
    useTitle('Add Service');

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.name.value;
        const serviceDescription = form.description.value;
        const servicePrice = form.price.value;
        const serviceImg = form?.photoUrl?.value || 'no url';

        const newService = {
            name: serviceName,
            description: serviceDescription,
            price: servicePrice,
            img: serviceImg,
        }

        fetch('https://doctor-service-server-atique-atq.vercel.app/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service added.', {
                        position: "top-right"
                    });
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }

    return (
        <div>
            <div className="card flex-shrink-0 w-10/12 shadow-2xl bg-base-100 py-6 mx-auto px-10">
                <h6 className="text-3xl text-center font-bold py-0 my-0 text-green-700">Add a service</h6>
                <form onSubmit={handleAddService} className="card-body px-12">
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