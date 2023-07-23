import React from 'react';
import { Link } from 'react-router-dom';

const SingleAdmission = ({data}) => {
    const {collegeImage,collegeName,_id}= data;
    return (
    <>
       <div className="w-full max-w-xs overflow-hidden bg-blue-100 rounded-lg shadow-lg mx-auto">
    <img className="object-cover w-full h-56" src={collegeImage} alt="avatar"/>

    <div className="py-5 text-center">
        <Link to={`/admission/${_id}`} className="block text-xl text-gray-800 " tabindex="0" role="link">{collegeName}</Link>
    </div>
</div>    
    </>
    );
};

export default SingleAdmission;