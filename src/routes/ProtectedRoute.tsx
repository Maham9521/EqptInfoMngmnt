import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const isSignedIn = localStorage.getItem('signedIn') === 'true';

    if (!isSignedIn) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
