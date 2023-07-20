import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/use-auth';

interface Props {
    children: React.ReactNode;
}
function Protected({ children }: Props) {
    const { isAuth } = useAuth();
    console.log('isAuth Protected: ', isAuth);
    if (!isAuth) {
        return <Navigate to="/signin" replace />;
    }
    return <>{children}</>;
}
export default Protected;
