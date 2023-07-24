import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../components/hooks/useTitle';

const SingleDetails = () => {
    useTitle('Details');
    const singleData = useLoaderData();
    const {collegeName,admissionProcess, admissionDates,sportsFacilities, events, researchHistory, sports, collegeImage , _id} = singleData;
    // console.log(singleData);
    return (
        <>
            <div className=" overflow-hidden rounded-lg shadow-md w-[70%] mx-auto mt-2 mb-5">
                <img className="object-cover w-full h-64" src={collegeImage} alt="Article" />
                <div className="p-6">
                    <div>
                        <p className="block mt-2 text-2xl text-gray-800">{collegeName}</p>
                        <p className="mt-2 text-sm text-gray-600 ">Admission process : {admissionProcess}</p> <br/>
                <p className="mt-2 text-sm text-gray-600 ">Events 1 : {events.one.name} ({events.one.date}). {events.one.description}</p>
                <p className="mt-2 text-sm text-gray-600 ">Events 2 : {events.two.name} ({events.two.date}). {events.two.description}</p>
                <p className="mt-2 text-sm text-gray-600 ">Events 2 : {events.three.name} ({events.three.date}). {events.three.description}</p> <br/>
                {/* research */}
                <p className="mt-2 text-sm text-gray-600">Research History : Founding Year - {researchHistory.foundingYear}
                <p> Notable Discoveries : {researchHistory.notableDiscoveries?.one}, {researchHistory.notableDiscoveries.two}.</p> 
                <p>Research Description : {researchHistory.description}</p>
                </p> <br/>
                {/* sports */}
                <p className="mt-2 text-sm text-gray-600">Sports : {sports?.one}, {sports?.two}, {sports?.three}, {sports?.fore}.
                <p>Sports Facilities : {sportsFacilities}</p> </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleDetails;