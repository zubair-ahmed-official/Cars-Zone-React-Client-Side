// import React from 'react';

import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";




const TabularAllToys = ({ t, toys, setToys }) => {
    const { _id, url, name, seller_name, sub_category, price, available, posted_by } = t;

    return (
        <tr>
            <td>
                <div className='d-flex align-items-center'>
                    <img
                        src={url}
                        alt=''
                        style={{ width: '55px', height: '55px' }}
                        className='rounded-circle'
                    />
                    <div className='ms-3'>
                        <p className='fw-bold mb-1'>{name} </p>

                    </div>
                </div>
            </td>
            <td> <p className='fw-bold mb-1'>{posted_by} </p></td>
            <td>
                <p className='fw-normal mb-1'>{seller_name}</p>

            </td>
            <td>
                <p className='text-muted mb-0'>{sub_category}</p>
            </td>
            <td><p className='text-muted mb-0'>{price} BDT</p></td>
            <td><p className='text-muted mb-0'>{available}</p></td>
            <td><Link to={`/ToyDetails/${_id}`}>
            <MDBBtn size='sm'>
                View Details
            </MDBBtn></Link> &nbsp;</td>
        </tr>
        // <div className="card card-side bg-purple-50 shadow-xl" style={{ width: '500px', margin: '10px' }}>
        //     <figure><img style={{ width: '160px', height: '150px', borderRadius: '8px' }} src={url} alt="coffeeImg" /></figure>
        //     <div className=" text-gray-500 card-body flex text-left">
        //         <div>
        //             <h2 className="card-title text-violet-600">{name}</h2>
        //             <p className="">Price: <b>{price} BDT</b></p>
        //         </div>
        //         <br></br>
                
        //     </div>
        // </div>
    );
};

export default TabularAllToys;