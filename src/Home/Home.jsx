import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

import Propertys from "../Propertys/Propertys";
import 'animate.css';




const Home = () => {
    const property = useLoaderData();
    return (
        <div>
            <div className="mt-7 animate__animated animate__swing animate__delay-2s">
            <Banner></Banner>
            
            </div>
            
            
            <div className="lg:grid grid-cols-2 mx-auto animate__animated animate__swing animate__delay-5s">
            
                {
                    property.map(propertys => <Propertys  
                   key={propertys.id} 

                   property={propertys}

                    ></Propertys> )
                }
            </div>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Home;