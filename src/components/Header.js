import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate('/error');
        });
    };

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }));
                navigate('/browse');
                console.log(user);

                // ...
            } else {
                // User is signed out
                dispatch(removeUser());
                 navigate('/');

                // ...
            }
        });
      // Unsubscribe auth listener on unmount
        return () => unsubcribe();
    }, []);

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between flex items-center'>
            <img className='w-44' src={LOGO} alt='logo' />
            {user && <div className='flex items-center gap-4 text-white float-right cursor-pointer top-0'>
                <img
                    src={user?.photoURL}
                    className='w-10 rounded-md'
                    alt='avatar'
                />
                <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
            </div>}
        </div>

    )
}

export default Header