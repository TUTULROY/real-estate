import { Link, useNavigate, useLocation } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
const {signIn} = useContext(AuthContext)

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm()

const navigate = useNavigate();
      const location = useLocation();
  
      const from = location?.state || "/"

const onSubmit = (data) => {
  
  const {email, password} = data;
  signIn(email, password)
  .then(result =>{
    if(result.user){
        navigate(from);
    }
})
  
}

    // const handleLogin = e =>{
    //     e.preventDefault();
        
    //     console.log(e.currentTarget);
    //     const form = new FormData(e.currentTarget);
    //     const email = form.get('email');
    //     const password = form.get('password');
    //     signIn(email, password)
    //     .then(result =>{
    //       console.log(result.user)
    //     })
    //     .catch(error =>{
    //       console.error(error);
    //     })

    //     console.log(email, password);
        
    // }

    return (
        <div>
           
           <div>
           <h3 className="text-2xl my-8 text-center">Please Login</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
               <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" 
          {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
          {errors.password && <span>This field is required</span>}  
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <SocialLogin></SocialLogin>
      <p className="text-center mt-2">Do not have an account <Link className="text-blue-500  font-bold" to="/register">Register</Link></p>
           </div>
        </div>
    );
};

export default Login;