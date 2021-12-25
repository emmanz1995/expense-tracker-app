import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthAPI from '../../api/AuthAPI';

export const PrivateRoute = ({ children }) => {
    let currentUser = AuthAPI.getJWT();
    let location = useLocation();

    if (!currentUser) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};
