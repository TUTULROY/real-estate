import useAuth from "../hooks/useAuth";
import {Navigate , useLocation} from "react-router-dom";
import PropTypes from 'prop-types';

import 'animate.css';

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation()

    if(loading){
        return <h2 className="text-4xl animate__slower">
            <span className="loading loading-infinity loading-lg"></span>
        </h2>;
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes ={
    children: PropTypes.node
}