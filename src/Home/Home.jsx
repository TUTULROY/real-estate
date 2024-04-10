import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import Propertys from "../Propertys/Propertys";



const Home = () => {
    const property = useLoaderData();
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <div className="grid grid-cols-2 mx-auto">

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