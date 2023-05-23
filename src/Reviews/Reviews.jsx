// import React from 'react';

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error(error));
    }, []);
    return (
       
        <div className="">
           <h2 className="text-center mt-5 mb-4" style={{color:'navy', fontWeight:'600'}}>Reviews</h2>
           <Marquee speed={150}>
            {reviews.map((review) => (
                <div key={review._id} className="card p-3 m-3 text-center" style={{width:'250px', height: '370px', boxShadow:' 0 4px 5px 0 , 0 2px 12px 0 '}}>
                    <img style={{ width: '100%', height: '200px', marginBottom:'15px', borderRadius: '50%'}} src={review.image}></img>
                    <h5><b>{review.name}</b></h5>
                    <p>{review.text}</p>
                </div>
            ))}
            </Marquee>
        </div>
        
    );
};

export default Reviews;