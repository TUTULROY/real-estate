import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

import Propertys from "../Propertys/Propertys";
import 'animate.css';
import Marquee from "react-fast-marquee";






const Home = () => {
    const property = useLoaderData();
    return (
        
        <div>
             
            <div className="mt-7 animate__animated animate__swing animate__delay-2s">
            <Banner></Banner>
            
            </div>
            <div>
                <h2 className="text-2xl my-9 text-center font-bold">View Property Details</h2>
                <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/"></Link>
        <Link className="mr-12" to="/"></Link>
        <Link className="mr-12" to="/"></Link>
        </Marquee>
                </div>
            
            
            <div className="lg:grid grid-cols-2 mx-auto animate__animated animate__swing animate__delay-5s">
            
                {
                    property.map(propertys => <Propertys  
                   key={propertys.id} 

                   property={propertys}

                    ></Propertys> )
                }
            </div>
           
            
        </div>
    );
};

export default Home;