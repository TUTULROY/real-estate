import { useLoaderData } from "react-router-dom";
import Agents from "../Agents/Agents";

const Agent = () => {
   
   
    const agents = useLoaderData();
    



    return (
        <div className="lg:grid grid-cols-3">
           
           {
            agents.map(agent =><Agents key={agents.id} agents={agent}></Agents>)
           }
        </div>
    );
};

export default Agent;