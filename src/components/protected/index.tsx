import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
    isAuth: boolean;
}
function Protected({ isAuth, children }: Props) {
    if (!isAuth) {
        return <Navigate to="/signin" replace />;
    }
    return <>{children}</>;
}
export default Protected;
