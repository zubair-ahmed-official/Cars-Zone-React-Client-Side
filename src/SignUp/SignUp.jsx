// import React from 'react';
import './SignUp.css'
import { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const SignUp = () => {
    const [accepted, setAcceptance] = useState(false);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleCheck = (event) => {
        setAcceptance(event.target.checked);
    }
    const { createUser } = useContext(AuthContext);
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(name, email, password, confirm_password, photo);


        if (password !== confirm_password) {
            setError('Password did not match');
            return;
        }
        if (email === "" || password === "") {
            setError('Email or Password can not be empty');
            return;
        }
        const from = location?.state?.from?.pathname || '/';
        createUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                console.log(registeredUser);
                setError('');
                updateUserData(result.user, name)
                let timerInterval
                Swal.fire({
                    title: 'Successfully Signed Up!',
                    html: 'Closing in <b></b> milliseconds.',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })

        const updateUserData = (user, name) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => console.log("Profile updated"))
                .catch(err => console.error(err))
        }
    }
    return (
        <div className='flexing'>
            <Helmet>
                <title>Cars Zone | Sign Up</title>
            </Helmet>
            <div>
                <img src='https://i.ibb.co/QFD9TLC/pexels-revac-film-s-photography-54277.jpg' style={{ width: '750px', height: '550px', margin: '35px 0 0 160px' }}></img>
            </div>
            <form className="Container" onSubmit={handleRegister}>
                <h2 className='text-3xl' style={{ marginTop: '30px', fontWeight: '700', color: 'brown' }}>Sign Up</h2><br></br>
                <input type="text" placeholder="Name" name="name" className="inputs" required /><br></br><br></br>
                <input type="email" placeholder="Email" name="email" className="inputs" required /><br></br><br></br>
                <input type="password" placeholder="Password" name="password" className="inputs" required /><br></br><br></br>
                <input type="password" placeholder="Confirm Password" name="confirm_password" className="inputs" required /><br></br><br></br>
                <input type="text" placeholder="Photo URL" name="photo" className="inputs" required /><br></br><br></br>
                <input onClick={handleCheck} type="checkbox" /> Agree the terms and conditions!
                <p>Already have an account! <Link to='/Login' style={{ color: 'blue', textDecoration: 'none' }}><b>Login</b></Link></p>
                {!accepted ? <button type="submit" className="signUpBtnDisabled" disabled>Sign Up</button> : <button type="submit" className="signUpBtn">Sign Up</button>}
                <p style={{ color: 'red' }}>{error}</p>
                <br></br><br></br>
            </form>
            
        </div>

    );
};

export default SignUp;