import useAuth from "../hooks/useAuth";
import {useNavigate , useLocation} from "react-router-dom";

const SocialLogin = () => {
    const {googleLogIn, githubLogIn} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state || "/"
    const handleSocialLogin = socialProvider => {

        socialProvider()
        .then(result =>{
            if(result.user){
                navigate(from);
            }
        })
    }
    return (
        <div>
            <div>
                <h2>Continue With</h2>
            </div>
            <div>
            <button onClick={() => handleSocialLogin(googleLogIn)} className="btn">Google</button>
            <button onClick={() => handleSocialLogin(githubLogIn)} className="btn">Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;