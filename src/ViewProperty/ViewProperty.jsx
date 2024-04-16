import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom";


const ViewProperty = () => {
    const {id} = useParams();
    const propertys = useLoaderData();
    const property = propertys.find(property => property.id === id)


    return (
        <div>
            <Helmet>
            <title>View Property:{id}</title>
          </Helmet>
            <h2 className="text-center text-2xl font-semibold my-5">View Property</h2>
           <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
             <img src={property.image} className="max-w-2xl max-h-max rounded-2xl shadow-2xl" />
         <div>
      <h1 className="text-4xl my-2 font-bold">{property.estate_title}</h1>
      <h1 className="text-xl my-2 font-bold mt-2 py-3">{property.segment_name}</h1>
      <p className="py-2 my-2 text-3xl">{property.description}</p>
      <div className="text-2xl my-2  text-green-400  font-bold rounded-xl flex">
            <p className="mr-3">Price: {property.price}</p> 
            <p className="ml-3">Status: {property.status}</p>
      </div>
        <p className="my-2 text-2xl font-bold text-purple-400">Area: {property.area}</p>
        <h1 className="text-2xl">{property.location}</h1>
        <p className="text-xl my-2">
            <span className="mr-2 text-amber-200">{property.facilities[0]}</span>
            <span className="mr-2 text-slate-300">{property.facilities[1]}</span>
            <span className="ml-2  text-slate-300">{property.facilities[2]}</span>
            <span className="ml-2  text-slate-300">{property.facilities[3]}</span>
            <span className="ml-2  text-slate-300">{property.facilities[4]}</span>
        </p>

      
      <button className="btn btn-primary">Get Started</button>
         </div>
        </div>
            </div>
            
        </div>
    );
};

export default ViewProperty;