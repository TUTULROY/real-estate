import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

import Propertys from "../Propertys/Propertys";
import 'animate.css';
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();






const Home = () => {
    const property = useLoaderData();
    return (
        
        <div>
            <Helmet>
        <title>Home T.R Estate</title>
        
      </Helmet>
            <div data-aos="zoom-in" className="mt-7 animate__animated animate__delay-5s">
            <Banner></Banner>
            
            </div>
            <div>
                <h2 className="text-2xl my-9 text-center font-bold">View Property Details</h2>
                <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/">Residential development is real estate development for residential purposes. Some such developments are called a subdivision, when the land is divided into lots with houses constructed on each lot. </Link>
        <Link className="mr-12" to="/">Residential development is real estate development for residential purposes. Some such developments are called a subdivision, when the land is divided into lots with houses constructed on each lot. </Link>
        <Link className="mr-12" to="/">Residential development is real estate development for residential purposes. Some such developments are called a subdivision, when the land is divided into lots with houses constructed on each lot.  </Link>
        </Marquee>
                </div>
            
            
            <div data-aos="fade-up" className="lg:grid grid-cols-2 mx-auto animate__animated  animate__delay-5s">
            
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