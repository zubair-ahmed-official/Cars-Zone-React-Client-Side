// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import Tabular from "../Tabular/Tabular";
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const url = `https://cars-zone-server-side-express-js.vercel.app/toys?email=${user.email}&sortField=price&sortOrder=${sortOrder}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    AOS.init();
                    setToys(data)
                }
                else {
                    navigate('/')
                }
            })
    }, [url, navigate])

   

    // useEffect(() => {
    //     fetch(`https://cars-zone-server-side-express-js.vercel.app/toys?email=${user.email}&sortField=price&sortOrder=${sortOrder}`)
    //         .then(response => response.json())
    //         .then(data => setToys(data))
    //         .catch(error => console.error('Error retrieving products:', error));
    // }, [sortOrder]);

    const handleSortClick = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
    };

    return (
        <div className=" text-center">
            <Helmet>
                <title>Car Zone | My Toys</title>
            </Helmet>
            <h2 className="mt-2"><b>My Toys</b></h2>
            <MDBBtn outline color='dark' type='submit' size='md' onClick={handleSortClick}><b>Sort {sortOrder === 'asc' ? 'Ascending' : 'Descending'}</b></MDBBtn>
            <MDBTable align='middle' hover>
                <MDBTableHead>
                    <tr>
                        <th scope='col' style={{ fontWeight: '600', fontSize: '21px' }}>Toys</th>
                        <th scope='col' style={{ fontWeight: '600', fontSize: '21px' }}>Posted By</th>
                        <th scope='col' style={{ fontWeight: '600', fontSize: '21px' }}>Seller Name</th>
                        <th scope='col' style={{ fontWeight: '600', fontSize: '21px' }}>Sub-category</th>
                        <th scope='col' style={{ fontWeight: '600', fontSize: '21px' }}>Price</th>
                        <th scope='col' style={{ fontWeight: '600', fontSize: '21px' }}>Available</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody data-aos="zoom-in-up" style={{ fontWeight: '400', fontSize: '16px' }}>
                    {
                        toys.map(t =>
                            <Tabular key={t._id} t={t} toys={toys} setToys={setToys}>
                            </Tabular>
                        )
                    }

                </MDBTableBody>
            </MDBTable>
        </div>
    );
};

export default MyToys;