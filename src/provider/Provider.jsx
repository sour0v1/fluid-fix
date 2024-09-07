import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebase.config';

// create context
export const AppContext = createContext(null);

const Provider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider;

    // create user by email and password
    const createUserByEmailPass = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    // create or login with Google
    const createUserByGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // sign in with email and password
    const signInWithEmailPass = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const value = {
        user,
        createUserByEmailPass,
        createUserByGoogle,
        signInWithEmailPass,
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default Provider;