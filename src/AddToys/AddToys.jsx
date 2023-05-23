// import React from 'react';

import Swal from "sweetalert2";
import './AddToys.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Helmet } from 'react-helmet';

const AddToys = () => {
    const { user } = useContext(AuthContext)
    const HandleAddToys = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const seller_name = event.target.seller_name.value;
        const seller_email = event.target.seller_email.value;
        const sub_category = event.target.sub_category.value;
        const available = event.target.available.value;
        const rating = event.target.rating.value;
        const details = event.target.details.value;
        const price = parseInt(event.target.price.value);
        const url = event.target.url.value;
        const posted_by = event.target.posted_by.value;
        const email = event.target.email.value;

        const newToys = { name, seller_name, seller_email, sub_category, available, rating, details, price, url, posted_by, email }
        console.log(newToys);

        fetch('https://cars-zone-server-side-express-js.vercel.app/toys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Toy Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    // event.target.reset();
                }
            }
            )
    }
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch('https://cars-zone-server-side-express-js.vercel.app/sub_categories')
            .then(response => response.json())
            .then(data => {
                setOptions(data);
            })
            .catch(error => {
                console.error('Error fetching data from API:', error);
            });
    }, []);
    return (
        <div className="">
            <Helmet>
                <title>Cars Zone | Add Toy</title>
            </Helmet>
            <h2 className="ms-5" style={{ color: 'brown', fontSize: '30px', fontWeight: '700', marginTop: '30px' }}>Add a Toy</h2>
            <br></br>
            <div className="d-flex">
                <form className="ms-5" onSubmit={HandleAddToys}>
                    <div>
                        <div className="">
                            <p>Name:</p>
                            <input name="name" type="text" placeholder="Toy Name" className="inputsToy" required />
                        </div><br></br>
                        <div className="">
                            <p>Picture URL:</p>
                            <input name="url" type="text" placeholder="Picture URL" className="inputsToy" required />
                        </div><br></br>
                        <div className="">
                            <p>Seller Name:</p>
                            <input name="seller_name" type="text" placeholder="Seller Name" className="inputsToy" defaultValue={user.displayName} required />
                        </div><br></br>
                        <div style={{ display: 'none' }}>
                            <p>Posted By:</p>
                            <input name="posted_by" type="text" placeholder="Posted By" className="inputsToy"
                                defaultValue={user.displayName} readOnly />
                        </div>
                        <div style={{ display: 'none' }}>
                            <p>Posters Email:</p>
                            <input name="email" type="email" placeholder="Posters Email" className="inputsToy" defaultValue={user.email} readOnly />
                        </div>
                        <div className="">
                            <p>Seller Email:</p>
                            <input name="seller_email" type="email" placeholder="Seller Email" className="inputsToy" defaultValue={user.email} required />
                        </div><br></br>
                        <div className="">
                            <p>Sub-Category:</p>
                            {/* <input name="sub_category" type="text" placeholder="Sub-Category" className="inputsToy"  required/> */}
                            <select className="inputsToy" name="sub_category">
                                {options.map(option => (
                                    <option key={option.sub_category} value={option.sub_category}>
                                        {option.sub_category}
                                    </option>
                                ))}
                            </select>
                        </div><br></br>
                        <div className="">
                            <p>Price:</p>
                            <input name="price" type="number" placeholder="Price" className="inputsToy" required />
                        </div><br></br>
                        <div className="">
                            <p>Rating:</p>
                            <input name="rating" type="number" placeholder="Rating" className="inputsToy" required />
                        </div><br></br>
                        <div className="">
                            <p>Available Quantity:</p>
                            <input name="available" type="number" placeholder="Available Quantity" className="inputsToy" required />
                        </div><br></br>
                        <div className="">
                            <p>Details Description:</p>
                            <textarea name="details" placeholder="Details Description" className="inputsToyArea" required />
                        </div>
                    </div>
                    <br></br>
                    <button className="addToy">Add Toys</button>
                </form>
                <div>
                    <img src="https://i.ibb.co/5FWQhGp/vlad-zinculescu-5-q-W6-X8m-Ds-unsplash.jpg" style={{ width: '750px', height: '1200px', margin: '0px 0 0 120px' }}></img>
                </div>
            </div>
        </div>
    );
};

export default AddToys;