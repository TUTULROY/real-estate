import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Marquee from "react-fast-marquee";
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
    
            <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/">Price:{price}</Link>
        <Link className="mr-12" to="/">Price:{price}</Link>
        <Link className="mr-12" to="/">Price:{price}</Link>
        </Marquee>
    <div className="card-actions">
        <Link to={`/property/${id}`}>
        <button className="btn btn-active btn-secondary">View Property</button>
        </Link>
      
    </div>
  </div>
</div> 
        </div>
    );
};

export default Propertys;

Propertys.propTypes ={
  property: PropTypes.node
}
