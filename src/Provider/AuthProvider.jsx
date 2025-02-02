import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, image) =>{

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    const githubLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);

    }

    const logOut = () =>{
        setUser();
        return signOut(auth);
    }

    useEffect(()=>{

       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
           
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }

    }, [loading])

    const authInfo = {
        user,
        createUser,
        signIn,
        googleLogIn,
        githubLogIn,
        loading,
        updateUserProfile,
        logOut,
        setLoading


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children: PropTypes.node
}