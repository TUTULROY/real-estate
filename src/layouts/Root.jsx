import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto font-poppins">
                <NavBar></NavBar>

           <Outlet></Outlet>
           <Footer></Footer>
        </div>
        </div>
    );
};

export default Root;