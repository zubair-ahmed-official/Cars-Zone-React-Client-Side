// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from "../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "bootstrap";
import './ShopByCategory.css'
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import AOS from 'aos';
import 'aos/dist/aos.css';
const ShopByCategory = () => {
    const [subCategory, setCategory] = useState([]);
    const [toys, setToys] = useState([]);
    const [matching, setMatching] = useState([]);
    // const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    // const url = `http://localhost:5000/toys?sub_category=${sub_category}`;
    const url1 = `http://localhost:5000/sub_categories`;
    const url2 = `http://localhost:5000/toys`;
    useEffect(() => {
        fetch(url1)
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setCategory(data)
                }
                else {
                    navigate('/')
                }
            })
        fetch(url2)
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setToys(data)
                }
                else {
                    navigate('/')
                }
            })
    }, [])
    const getProperty = (sub_category) => {
        fetch(`http://localhost:5000/toys?sub_category=${sub_category}`)
            .then(res => res.json())
            .then(data => {
                AOS.init();
                setMatching(data)
            })
        // toys.map(t => 
        //     {(t.sub_category === sub_category) &&
        //     setMatching([t]) 
        //         // console.log([{t}])
        //     })


    };
    return (
        <div>
            <h2 className="text-center mt-5 mb-4" style={{ color: 'crimson', fontWeight: '600' }}>Shop by Category</h2>

            <Tabs className={"Tabs text-center"} >
                <TabList>
                    {subCategory.map(s => <Tab key={s._id} onClick={() => getProperty(s.sub_category)}>{s.sub_category}</Tab>)}
                </TabList>
                <table align='middle'>
                    
                        <tr>
                            <th scope='col' className="tableHeaders">Photo</th>
                            <th scope='col' className="tableHeaders">Name</th>
                            <th scope='col' className="tableHeaders">Price</th>
                            <th scope='col' className="tableHeaders">Rating</th>
                           
                        </tr>
                    
                    {
                        matching.map(m =>

                            <tbody  data-aos="fade-right" key={m._id} style={{ fontWeight: '400', fontSize: '16px' }}>
                                <tr className="tableBody">
                                    <td className="tableData"><img className="categoryImg" src={m.url} alt="coffeeImg" /></td>
                                    <td className="tableData">{m.name}</td>
                                    <td className="tableData"> <b>{m.price} BDT</b></td>
                                    <td className="tableData"> <b>{m.rating} </b></td>
                                    <td className="tableData"><Link to={`/ToyDetails/${m._id}` } className="viewBtn">
                                        <button className="view" size='sm'>
                                            View Details
                                        </button></Link> </td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;