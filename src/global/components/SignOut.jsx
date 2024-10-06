import React, { useContext } from 'react';
import { AppContext } from '../../provider/Provider';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.config';

const SignOut = () => {
    const {user} = useContext(AppContext);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Sign out Successfully!');
            })
            .catch((error) => {
                console.log("An error happened - ", error);
            })
    }

    return (
        <button onClick={logOut} className={'hover:bg-[#094074] hover:bg-opacity-10 lg:hover:bg-white py-2 pl-3 transform hover:scale-105 hover:transition-transform duration-300 lg:text-left'}>Log out</button>
    );
};

export default SignOut;