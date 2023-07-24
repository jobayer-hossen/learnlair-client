import React from 'react';
import { Link } from 'react-router-dom';

const CollageCard = ({ data }) => {
    const { collegeName, admissionDates, events, collegeRating, researchHistory, sports, collegeImage, _id } = data;
    return (
        <>
            <div className=" w-[90%] p-6 rounded-md shadow-2xl mx-auto bg-blue-50 mt-4">
                <img src={collegeImage} alt="" className=" object-cover object-center w-full rounded-md h-72 " />
                <div className="mt-6 mb-2 text-gray-700">
                    <h2 className="text-xl text-gray-700 text-center mb-5">{collegeName}</h2>
                    <span className="leading-relaxed">Admission Date : {admissionDates?.fall} - {admissionDates?.spring}</span><br />
                                <span className="leading-relaxed">Events : <span className='text-sm'>{events.one.name}, {events.two.name}, {events.three.name}.</span> </span><br />
                                <span className="leading-relaxed">Research History : Founding Year - {researchHistory?.foundingYear} <br />
                                    Notable Discoveries : {researchHistory?.notableDiscoveries?.one}, {researchHistory?.notableDiscoveries?.two}
                                </span><br />
                                <span className="leading-relaxed">Sports : {sports?.one}, {sports?.two}, {sports?.three}, {sports?.fore}.</span>
                                <span className="flex mt-2 items-center border-b-2 border-gray-100 mb-5"></span>
                                <Link to={`/details/${_id}`}>
                                    <div className="flex">
                                        <button className=" mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Details</button>
                                    </div></Link>
                </div>
            </div>


        </>
    );
};

export default CollageCard;