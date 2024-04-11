import useAuth from "../hooks/useAuth";
import {Navigate , useLocation} from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation()

    if(loading){
        return <h2 className="text-4xl">loading</h2>;
    }

    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    return (


        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;