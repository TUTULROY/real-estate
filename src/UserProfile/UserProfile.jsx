import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";

const UserProfile = () => {
    const { currentUser } = useAuth();
    const { register } = useForm();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (currentUser) {
            const { displayName, email, photoURL } = currentUser;
            setUserData({ displayName, email, photoURL });
        }
    }, [currentUser, setUserData]);

    return (
        <div>
            <h2 className="text-2xl my-10 text-center">Profile Information</h2>
            {userData && (
                <form className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={userData.displayName}
                            className="input input-bordered"
                            readOnly
                            {...register("fullName", { required: true })}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            className="input input-bordered"
                            readOnly
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photoURL"
                            value={userData.photoURL}
                            className="input input-bordered"
                            readOnly
                            {...register("image", { required: true })}
                        />
                    </div>
                </form>
            )}
        </div>
    );
};

export default UserProfile;
