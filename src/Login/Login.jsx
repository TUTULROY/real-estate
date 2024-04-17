import { Link, useNavigate, useLocation } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
const {signIn} = useContext(AuthContext)
// const [error, setError] = useState(null);


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
//   .then(result =>{
//     toast.success("LogIn successful");
//     if(result.user){
      
//         navigate(from);
//     }
  
// })
.then(result => {
  console.log("Login Result:", result); // Log the result for debugging
  toast.success("Login successful");
  if (result.user) {
    navigate(from);
  }
})
.catch(error => {
  console.error(error);
  toast.error('Invalid email or password.');
})

  
}

  
    return (
        <div>
           <Helmet>
            <title>Login</title>
           </Helmet>
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
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
          {errors.password && <span className="text-red-500">This field is required</span>}  
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          {/* {
          error && <span className="text-red-500">{error}</span>
          
          } */}
        </div>
      </form>
      <SocialLogin></SocialLogin>
      <p className="text-center mt-2">Do not have an account <Link className="text-blue-500  font-bold" to="/register">Register</Link></p>
           </div>
           <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;