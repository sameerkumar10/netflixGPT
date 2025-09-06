import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);


    const toggleSignInForm = () => {
        // // Logic to toggle between sign-in and sign-up forms
        // console.log("Toggle Sign-In/Sign-Up Form");
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg-img' />
            </div>
            <div>
                <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'> 
                    <h1 className='text-3xl font-bold mb-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                    {!isSignInForm && (
                        <input type="text" placeholder='FullName' className='p-4 my-4 w-full bg-gray-700' />
                    )}
                    <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                    <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />



                    <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                    <p className='text-gray-400' onClick={toggleSignInForm}>
                        {isSignInForm ? "New to Netflix ?" :"Already registered ?"}<span className='text-white cursor-pointer'>{isSignInForm ? " Sign Up now." :" Sign In now"}</span>
                    </p>
                </form>
            </div>


        </div>

    );
};

export default Login