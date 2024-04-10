import { Link } from "react-router-dom";


const Propertys = ({property}) => {

    const {id, estate_title, description, image, price} = property;

    return (
        <div className="">
           <div className=" bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{estate_title}</h2>
    <p>{description}</p>
    <p>Price:  {price}</p>
    <div className="card-actions">
        <Link to={`/property/${id}`}>
        <button className="btn btn-primary">View Property</button>
        </Link>
      
    </div>
  </div>
</div> 
        </div>
    );
};

export default Propertys;