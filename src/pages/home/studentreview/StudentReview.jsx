import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import Fade from 'react-reveal/Fade';

const StudentReview = () => {
    
    const [allReview, setReview] = useState([]);
    useEffect(()=>{
        fetch("https://learn-lair-server-emonhasan007.vercel.app/getReview")
        .then((res) => res.json())
        .then((data)=> setReview(data))
    },[]);
    // const {review,rating,image,candidateName,collegeName} = allReview;
// console.log(allReview)
    return (
    <>

<Fade bottom>
    <p className='text-4xl text-center mt-10'>Student Review</p>
    <p className='text-center'>"Read what others have to say about their experiences.<br/> Our review section is filled with honest feedback from satisfied customers, praising our products and services."</p>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-5 mb-5'>
        {
            allReview.map((reviews)=> <SingleReview key={reviews._id} reviews={reviews} /> )
        }
      </div>
      </Fade>
    </>
    );
};

export default StudentReview;