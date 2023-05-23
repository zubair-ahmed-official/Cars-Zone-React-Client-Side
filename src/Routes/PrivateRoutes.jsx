// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Spinner style={{margin:'100px 0 0 800px'}} animation="border" variant="danger" />
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={{ from: location }} to='/Login' />
    );
};

export default PrivateRoutes;