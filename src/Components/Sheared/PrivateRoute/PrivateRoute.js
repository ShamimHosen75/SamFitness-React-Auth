import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div className='text-center my-4'>
            <h1>Data Is Loading...</h1>
            <h5>Please Wait Few Second</h5>
        </div>
    }
    else {
        return (
            <Route
            {...rest}
            render={({ location }) => user.email ? children : <Navigate
                to={{
                    pathname: "/register",
                    state: { from: location }
                }}
            ></Navigate>
    
            }
        >
    
        </Route>
        );
}
};

export default PrivateRoute;