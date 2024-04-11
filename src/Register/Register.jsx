import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {

    const {createUser, updateUserProfile}  = useContext(AuthContext);


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const navigate = useNavigate();
      
  
      const from ="/"
    
      const onSubmit = (data) => {
        
        const {email, password, fullName, image} = data;
        createUser(email, password)
        .then(() =>{
            updateUserProfile(fullName, image)
            .then(() =>{
                navigate(from);
            })      
            
        })
      }

    // const handleRegister = e =>{
    //     e.preventDefault();
        
    //     console.log(e.currentTarget);
    //     const form = new FormData(e.currentTarget);
    //     const name = form.get('name');
    //     const photo = form.get('photo');
    //     const email = form.get('email');
    //     const password = form.get('password');
    //     console.log(name, photo, email, password);


    //     createUser(email, password)
    //     .then(result =>{
    //         console.log(result.user)
    //     })
    //     .catch(error =>{
    //         console.error(error)
    //     })

    // }
    return (

        <div>
       
<div>
<h2 className="text-2xl my-10 text-center">Please Register</h2>

<form onSubmit={handleSubmit(onSubmit)} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <input type="text" name="FullName" placeholder="Full Name" className="input input-bordered" {...register("fullName", { required: true })} />
        {errors.fullName && <span>This field is required</span>}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input type="text" name="image" placeholder="image url" className="input input-bordered" 
        {...register("image")}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" name="email" placeholder="Email" className="input input-bordered" 
        {...register("email", { required: true })}
        />
         {errors.email && <span>This field is required</span>}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" name="password" placeholder="Password" className="input input-bordered" 
        {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Register</button>
      </div>
    </form>
    <p className="text-center mt-2">Already have an account <Link className="text-blue-500  font-bold" to="/login">Login</Link></p>
</div>
  </div>

    );
};

export default Register;