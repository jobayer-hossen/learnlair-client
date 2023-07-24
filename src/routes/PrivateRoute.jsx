import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Progress from '../components/Progress';

const PrivateRoute = ({children}) => {
    const  {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Progress/>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace/>
};

export default PrivateRoute;