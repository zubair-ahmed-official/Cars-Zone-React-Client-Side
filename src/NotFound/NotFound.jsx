// import React from 'react';

import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <div style={{position: 'absolute', top:'25px', left: '680px', textAlign: 'center'}}>
            <h2>Page Not Found</h2>
            <Link to='/'><button className="btn btn-success"><b>Back to Home Page</b></button></Link>
            </div>
            <img src="https://i.ibb.co/RgWmh0n/6325254.jpg" className="w-100" style={{height: '850px'}}></img>
        </div>
    );
};

export default NotFound;