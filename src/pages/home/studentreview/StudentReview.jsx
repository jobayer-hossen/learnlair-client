import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

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
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-5 mb-5'>
        {
            allReview.map((reviews)=> <SingleReview key={reviews._id} reviews={reviews} /> )
        }
      </div>
    </>
    );
};

export default StudentReview;