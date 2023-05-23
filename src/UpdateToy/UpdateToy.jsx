// import React from 'react';

import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";
import { useLoaderData } from "react-router-dom";
import { Helmet } from 'react-helmet';

const UpdateToy = () => {
    const toyData = useLoaderData();
    const { _id, name, seller_name, seller_email, sub_category, available, rating, details, price, url, posted_by, email } = toyData;
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

        const updatedToys = { name, seller_name, seller_email, sub_category, available, rating, details, price, url, posted_by, email }
        console.log(updatedToys);
        fetch(`https://cars-zone-server-side-express-js.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Toy Updated',
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
                <title>Cars Zone | Update Toy</title>
            </Helmet>
            <h2 className="ms-5" style={{ color: 'brown', fontSize: '30px', fontWeight: '700', marginTop: '30px' }}>Update a Toy</h2>
            <br></br>
            <div className="d-flex">
                <form className="ms-5" onSubmit={HandleAddToys}>
                    <div>
                        <div className="">
                            <p>Name:</p>
                            <input name="name" type="text" placeholder="Toy Name" className="inputsToy" defaultValue={name} required />
                        </div><br></br>
                        <div className="">
                            <p>Picture URL:</p>
                            <input name="url" type="text" placeholder="Picture URL" className="inputsToy" defaultValue={url} required />
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
                            <input name="price" type="number" placeholder="Price" className="inputsToy" defaultValue={price} required />
                        </div><br></br>
                        <div className="">
                            <p>Rating:</p>
                            <input name="rating" type="number" placeholder="Rating" className="inputsToy" defaultValue={rating} required />
                        </div><br></br>
                        <div className="">
                            <p>Available Quantity:</p>
                            <input name="available" type="number" placeholder="Available Quantity" className="inputsToy" defaultValue={available} required />
                        </div><br></br>
                        <div className="">
                            <p>Details Description:</p>
                            <textarea name="details" placeholder="Details Description" className="inputsToyArea" defaultValue={details} required />
                        </div>
                    </div>
                    <br></br>
                    <button className="addToy">Update Toys</button>
                </form>
                <div>
                    <img src="https://i.ibb.co/L6dZHmr/dejected-bandha-6-KKib-YS334-unsplash.jpg" style={{ width: '750px', margin: '0px 0 0 120px' }}></img>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;