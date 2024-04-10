import { useLoaderData } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const ViewProperty = () => {
    const propertys = useLoaderData();
    const property = propertys.find(property => property.id)
    return (
        <div>
            <NavBar></NavBar>
            <h2>{property.description}</h2>
        </div>
    );
};

export default ViewProperty;