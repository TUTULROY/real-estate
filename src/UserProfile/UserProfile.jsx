// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";


const UserProfile = () => {
    const { user } = useAuth();
   
    

    return (
        <div className="text-center" >
            <Helmet>
                <title>User Profile</title>
            </Helmet>
          
            <h2 className="text-2xl my-10 ">Profile Information</h2>
           
                <form className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <img src={user.photoURL} alt="" />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={user?.displayName}
                            className="input input-bordered"
                            readOnly
                          
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={user?.email}
                            className="input input-bordered"
                            readOnly
                            
                        />
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photoURL"
                            value={user?.photoURL}
                            className="input input-bordered"
                            readOnly
                            
                        />
                    </div> */}
                </form>
             
  
           
        </div>
        
    );
};

export default UserProfile;
