// import React from 'react';

import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase-config";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loggedUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = (GoogleProvider) => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, signedUser => {
            console.log("Logged user", signedUser);
            setUser(signedUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { user, loading, createUser, loggedUser, googleLogin, logOut };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;