import React, { useRef, useState, useEffect } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // Reset errorMessage when isSignInForm changes
        setErrorMessage(null);
    }, [isSignInForm]);

    const handleButtonClick = (e) => {
        e.preventDefault();
        const message = checkValidData(
            email.current.value,
            password.current.value,
            name.current?.value
        );
        setErrorMessage(message);
        if (message) return;


        if (!isSignInForm) {
            // Handle sign-up logic here
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL,
                            })
                        );
                        navigate('/browse');
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                    });
                    console.log(user);
                    navigate('/browse');
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    // ..
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                    navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }


    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='bg-img'
                />
            </div>
            <div>
                <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                    <h1 className='text-3xl font-bold mb-4'>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>

                    {!isSignInForm && (
                        <input
                            ref={name}
                            type="text"
                            placeholder='FullName'
                            className='p-4 my-4 w-full bg-gray-700'
                        />
                    )}
                    <input
                        ref={email}
                        type="text"
                        placeholder='Email Address'
                        className='p-4 my-4 w-full bg-gray-700'
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder='Password'
                        className='p-4 my-4 w-full bg-gray-700'
                    />

                    <p className='text-red-500 font-bold text-lg py-2'>
                        {errorMessage}
                    </p>

                    <button
                        className='p-4 my-6 bg-red-700 w-full rounded-lg'
                        onClick={handleButtonClick}
                    >
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p className='text-gray-400' onClick={toggleSignInForm}>
                        {isSignInForm ? "New to Netflix ?" : "Already registered ?"}
                        <span className='text-white cursor-pointer'>
                            {isSignInForm ? " Sign Up now." : " Sign In now"}
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;