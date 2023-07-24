import React from 'react';
import Lottie from "lottie-react";
import progressAnimation from '../../public/progress/animation_lkgltnxl.json'
const Progress = () => {
    return (
        <>
             <div className='w-[35%] mx-auto'>
            <Lottie animationData={progressAnimation} loop={true} />
        </div>
        </>
    );
};

export default Progress;