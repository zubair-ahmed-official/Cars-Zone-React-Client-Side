// import React from 'react';

import { useLoaderData } from "react-router-dom";
import { Helmet } from 'react-helmet';


const ToyDetails = () => {
    const toys = useLoaderData();
    const { url, name, seller_name, seller_email, sub_category, price, available, rating, details } = toys;
    return (
        <div className="d-flex" style={{ margin: '50px 0 0 150px ' }}>
            <Helmet>
                <title>Cars Zone | Toy Details</title>
            </Helmet>
            <figure><img style={{ width: '100%', height: '380px', borderRadius: '8px' }} src={url} alt="coffeeImg" /></figure>
            <div className="ms-5" style={{ fontSize: "18px" }}>
                <h2 className="text-primary">{name}</h2>
                <p className="">Seller Name: {seller_name}</p>
                <p className="">Seller Email: {seller_email}</p>
                <p className="">Sub-Category: {sub_category}</p>
                <p className="">Price: <b>{price} BDT</b></p>
                <p className="">Rating: <b>{rating} </b></p>
                <p className="">Available Quantity: <b>{available} </b></p>
                <p className="">Details: {details} </p>
            </div>
        </div>
    );
};

export default ToyDetails;