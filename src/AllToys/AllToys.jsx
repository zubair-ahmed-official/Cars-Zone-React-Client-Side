// import React from 'react';

import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import TabularAllToys from "../TabularAllToys/TabularAllToys";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const AllToys = () => {
    const { totalCars } = useLoaderData()
    const [toys, setToys] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)
    // const { user } = useContext(AuthContext);
    const [itemsPerPage, setItemsPerPage] = useState(20)
    // const navigate = useNavigate()

    // const url = `http://localhost:5000/toys`;
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/toys?page=${currentPage}&limit=${itemsPerPage}`)
            const data = await response.json();
            AOS.init();
            setToys(data);
        }
        fetchData();
    }, [currentPage, itemsPerPage])

    const totalPages = Math.ceil(totalCars / itemsPerPage);
    // console.log(totalCars)
    const pageNumbers = [...Array(totalPages).keys()];

    const options = [2, 5, 10, 20]
    const handleSelectChange = (event) => {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }
    // const [searchResults, setSearchResults] = useState([]);
    // const handleSearch = async () => {
    //     try {
    //         // const response = await axios.get(`http://localhost:5000/toys?name=${searchQuery}`);
    //         const response = await axios.get(`http://localhost:5000/toys`);
    //         const data = response.data;

    //         // Filter the API response data based on the search query
    //         // const filteredResults = data.filter(item =>
    //         //     item.name.toLowerCase().includes(searchQuery.toLowerCase())
    //         // );
    //         console.log(data)
    //         setSearchResults(data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/toys');
            setToys(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
    };
    const filteredData = toys.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="container">
            <Helmet>
                <title>Cars Zone | All Toys</title>
            </Helmet>
            <h2 className="mt-2 ms-3"><b>All Toys</b></h2>
            <input className="ms-3 mb-2" style={{ width: '250px', height: '45px', borderColor: 'crimson' }} type="text" value={searchQuery} onChange={handleSearchChange} placeholder=" Search Car Toys" />
            {searchQuery && (
                <div className="ms-3">
                    {filteredData.map(item => (
                        <div className="text-left" key={item._id}><Link to={`/ToyDetails/${item._id}`} style={{ fontSize: '18px' }} >{item.name}</Link> <br></br></div>
                    ))}
                </div>
            )}
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
                <MDBTableBody data-aos="zoom-in-down" style={{ fontWeight: '400', fontSize: '16px' }}>
                    {
                        toys.map(t => <TabularAllToys key={t._id} t={t} toys={toys} setToys={setToys}></TabularAllToys>)
                    }
                </MDBTableBody>
            </MDBTable>
            <div className="text-center">
                <p className='my-2'>Current Page: {currentPage + 1} and Items per Page:<select className="mx-1 select select-accent max-w-xs" value={itemsPerPage} onChange={handleSelectChange}>
                    {
                        options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))
                    }
                </select></p>
                {
                    pageNumbers.map(num => <MDBBtn outline color="dark" className="mx-1" key={num} onClick={() => setCurrentPage(num)}>{num + 1}</MDBBtn>)
                }
            </div>
        </div>
    );
};

export default AllToys;