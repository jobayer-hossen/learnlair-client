import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // resister email and password --
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //  google login --
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // facebook login --
    const githubLogin =()=>{
        return signInWithPopup(auth, githubProvider);
    }
    
    //  login by email and password --
    const emailSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logout use  --
    const logOutUser =()=>{
        return signOut(auth);
    };

    // reset password--
    const resetPassword=()=>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
    }

    // user profile observe from firebase --
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                setLoading(false);
        })
        return () => {
                unSubscribe();
            }
    }, []);

    const authInfo = {
        createNewUser,
        googleLogin,
        githubLogin,
        emailSignIn,
        logOutUser,
        user,
        loading,
        resetPassword
    }    
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;