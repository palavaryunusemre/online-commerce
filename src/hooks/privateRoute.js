import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode'; // jwtDecode olarak değiştirildi

const getUserRole = (token) => {
    if (token) {
        const decodedToken = jwtDecode(token)
        return decodedToken.role
    }
    return null;
};

const PrivateRoute = ({ requiredRole,children}) => {
    const tokenArray = useSelector(state => state.token.tokenItems) // Redux store'dan token bilgisini al
    const token = tokenArray[0]
    const userRole = getUserRole(token) // Token'ı çözerek rol bilgisine eriş
    return userRole === requiredRole ? children : <Navigate to ="/"/>
    
};

export default PrivateRoute; // PrivateRoute bileşeni doğru şekilde export edildi
