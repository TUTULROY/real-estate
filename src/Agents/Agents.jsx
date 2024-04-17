import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Agents = ({agents}) => {
    const {agent_name,image, email, phone, type} = agents;
    return (
        <div data-aos="zoom-out-right" className="card w-96 bg-base-100 shadow-xl">
            <Helmet>
        <title>Agent</title>
       
      </Helmet>
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{agent_name}</h2>
          <h2>{type}</h2>
          <p>{email}</p>
          <p>{phone}</p>
          <div className="card-actions">
            <button className="btn btn-outline btn-success">Call Me</button>
          </div>
        </div>
      </div>
    );
};

export default Agents;

Agents.propTypes ={
    agents: PropTypes.node
  }