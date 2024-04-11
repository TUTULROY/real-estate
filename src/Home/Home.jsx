import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

import Propertys from "../Propertys/Propertys";




const Home = () => {
    const property = useLoaderData();
    return (
        <div>
            <div className="mt-7">
            <Banner></Banner>
            </div>
           
            
            <div className="grid grid-cols-2 mx-auto">

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