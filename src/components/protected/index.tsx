import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}
function Protected({ children }: Props) {
    const isAuth = localStorage.getItem('car-wash-token');
    if (!isAuth) {
        return <Navigate to="/signin" replace />;
    }
    return <>{children}</>;
}
export default Protected;
