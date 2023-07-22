import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import errorAnimation from '../../../public/error/animation_lkdpd96k.json'

const ErrorPage = () => {
    const { error } = useRouteError();
    return (
    <>
         {/* lottie animation  */}
         <div className='w-[35%] mx-auto'>
                    <Lottie animationData={errorAnimation} loop={true} />
        </div>
                <div className='text-center'>
                    <p className='text-xl font-semibold sm:text-2xl text-red-500 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='text-gray-900 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2   bg-gradient-to-r from-fuchsia-500 to-cyan-500 '>
                        Back to homepage
                    </Link>
                </div>       
    </>
    );
};

export default ErrorPage;