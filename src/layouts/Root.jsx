import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto font-poppins">
                <NavBar></NavBar>
           <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Root;