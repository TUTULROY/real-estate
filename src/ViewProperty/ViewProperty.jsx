import { useParams, useLoaderData } from "react-router-dom";


const ViewProperty = () => {
    const {id} = useParams();
    const propertys = useLoaderData();
    const property = propertys.find(property => property.id === id)
    return (
        <div>
            <h2 className="text-center text-2xl font-semibold my-5">View Property</h2>
           <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
             <img src={property.image} className="max-w-xl rounded-2xl shadow-2xl" />
         <div>
      <h1 className="text-5xl font-bold">{property.estate_title}</h1>
      <h1 className="text-2xl font-bold mt-2 py-3">{property.segment_name}</h1>
      <p className="py-2 text-3xl">{property.description}</p>
      <div className="text-2xl  text-green-400  font-bold rounded-xl flex">
            <p className="mr-4">Price: {property.price}</p> 
            <p className="ml-4">Status: {property.status}</p>
      </div>
        <p className="my-2 text-2xl font-bold text-purple-400">Area: {property.area}</p>
        <h1>{property.location}</h1>
      
      <button className="btn btn-primary">Get Started</button>
         </div>
        </div>
            </div>
            
        </div>
    );
};

export default ViewProperty;