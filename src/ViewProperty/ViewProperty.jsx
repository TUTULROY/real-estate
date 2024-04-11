import { useParams, useLoaderData } from "react-router-dom";


const ViewProperty = () => {
    const {id} = useParams();
    const propertys = useLoaderData();
    const property = propertys.find(property => property.id === id)
    return (
        <div>
           
            <h2>{property.description}</h2>
        </div>
    );
};

export default ViewProperty;