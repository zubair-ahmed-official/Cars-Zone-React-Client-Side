// import React from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css'
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase-config";
import Swal from "sweetalert2";
import { FaGoogle } from 'react-icons/fa';
import { Helmet } from "react-helmet";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogleLogo  } from '@fortawesome/free-solid-svg-icons';

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider(auth);

const Login = () => {
    const location = useLocation();
    const { loggedUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (email === "" || password === "") {
            setError('Email or Password can not be empty');
            return;
        }

        const from = location?.state?.from?.pathname || '/';
        loggedUser(email, password)
            .then(result => {
                const loggedIn = result.user;
                console.log(loggedIn);
                setError('');
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err.message);
                setError(err.message);
            }
            )
    }
    const [signedIn, setUser] = useState(null);
    const handleGoogleLogin = () => {
        const from = location?.state?.from?.pathname || '/';
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setError('');
                setUser(loggedInUser);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err.message);
                setError(err.message);
            })
    }

    return (
        <div className='flexing'>
            <Helmet>
                <title>Cars Zone | Login</title>
            </Helmet>
            <div >
                <img src='https://i.ibb.co/1RtxHhD/pexels-bhupendra-singh-754898.jpg' style={{ width: '750px', margin: '35px 0 0 160px' }}></img>
            </div>
            <form className="Container" onSubmit={handleLogin}>
                <h2 className='text-3xl' style={{ marginTop: '30px', fontWeight: '700', color: 'purple' }}>Login</h2><br></br>
                <input type="email" placeholder="Email" name="email" className="inputs" required /><br></br><br></br>
                <input type="password" placeholder="Password" name="password" className="inputs" required /><br></br><br></br>
                <p>Create an account! <Link to='/SignUp' style={{ color: 'blue', textDecoration: 'none' }}><b>Sign Up</b></Link></p>
                <button type="submit" className="loginBtn">Login</button><br></br><br></br>
               <button onClick={handleGoogleLogin} className="btn btn-outline-success"> <FaGoogle /> <b>Login with Google</b> </button><br></br><br></br>
                <p style={{ color: 'red' }}>{error}</p>
            </form>
        </div>
    );
};

export default Login;