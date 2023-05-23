// import React from 'react';

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useNavigation } from "react-router-dom";
import './Header.css'
import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { BsList, BsX } from 'react-icons/bs';
const Header = () => {
    const navigateLoading = useNavigation();
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch(err => console.error(err))
    }
    const [isShown, setIsShown] = useState(false);

    const handleMouseOver = () => {
        setIsShown(true);
    }

    const handleMouseOut = () => {
        setIsShown(false);
    }
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'rgb(121, 37, 69)', padding: '15px 0' }} variant="dark">
               
                    <Container>
                        <img src='https://live.staticflickr.com/65535/52905301788_3608a3e898_c.jpg' style={{ width: '55px', height: '45px', marginRight: '10px', borderRadius: '8px' }}></img>
                        <Navbar.Brand href="/"><span className="Brand"><b>Cars Zone</b></span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" >{isNavCollapsed ? <BsList /> : <BsX />}
                        </Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                            <Nav className="me-auto">
                                <Link className="HeaderLink" to='/'>Home</Link>
                                <Link className="HeaderLink" to='/AllToys'>All Toys</Link>
                                <Link className="HeaderLink" to='/MyToys'>My Toys</Link>
                                <Link className="HeaderLink" to='/AddToys'>Add a Toy</Link>
                                <Link className="HeaderLink" to='/Blogs'>Blogs</Link>
                            </Nav>
                            <Nav >
                                {user ?
                                    <div className="align-center"> {isShown &&
                                        <span style={{ color: 'white', marginRight: '10px' }}> {user.displayName}</span>}
                                        <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><img style={{ height: "45px", width: '50px', marginRight: '15px' }} src={user.photoURL} alt=''></img></span>
                                        <button className="signoutButton" onClick={handleLogout}> <b>Logout</b></button></div> : <Link to='/Login'><button className="loginButton"> <b>Login</b> </button></Link>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
            <Outlet></Outlet>

            <MDBFooter style={{ backgroundColor: '#34282C', color: 'gainsboro', marginTop: '100px' }} className='text-center text-lg-start'>

                <section className='pt-2'>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <img src='https://live.staticflickr.com/65535/52905301788_3608a3e898_c.jpg' style={{ width: '55px', height: '45px', borderRadius: '8px' }}></img>
                                    <MDBIcon className="me-3" />
                                    Cars Zone
                                </h6>
                                <p>
                                    One of the best car toy sellers in the country
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <div>
                                    <h6 className='text-uppercase fw-bold mb-4'>Social Media</h6>
                                    <a href='' className='me-4 text-white'>
                                        <MDBIcon fab icon="facebook-f" />
                                    </a>
                                    <a href='' className='me-4 text-white'>
                                        <MDBIcon fab icon="twitter" />
                                    </a>

                                    <a href='' className='me-4 text-white'>
                                        <MDBIcon fab icon="instagram" />
                                    </a>
                                </div>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='/' className='text-reset'>
                                        Home
                                    </a>
                                </p>
                                <p>
                                    <a href='/AllToys' className='text-reset'>
                                        All Toys
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Contact us
                                    </a>
                                </p>
                                <p>
                                    <a href='/Blogs' className='text-reset'>
                                        Blogs
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    Mirpur 10, Dhaka, Bangladesh
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    carszone65@gmail.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> 0175485963325
                                </p>

                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright: &nbsp;
                    <a className='text-reset fw-bold' href='#'>
                        Cars Zone
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
};

export default Header;