import React from 'react';
import { Link } from 'react-router-dom';

const SingleUserAdmissionData = ({data}) => {
    const {collegeImage,collegeName,candidateName,subjectName,candidateEmail,phoneNumber,address,dateOfBirth,_id,collegeDetails,image}= data;
    return (
    <>
      <section className="text-gray-600 w-full body-font overflow-hidden mx-auto mt-8 mb-8 shadow-xl">
                <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                    <div>
                    <img alt="ecommerce" className="w-[65%] rounded mx-auto" src={collegeImage} />
                    <h1 className="text-gray-900 text-center text-xl title-font font-medium mb-1">{collegeName}</h1>
                    </div>
                <div className="container mx-auto mb-3">
                    <div className="mx-auto">
                        <div className="w-[95%] mx-auto">
                            {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
                            {/* <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{collegeName}</h1> */}
                            {/* <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">{collegeRating} Reviews</span>
                                </span>
                            </div> */}
                            {/* <span className="leading-relaxed">Admission Date : {admissionDates?.fall} - {admissionDates?.spring}</span><br />
                            <span className="leading-relaxed">Events : {events.one.name}, {events.two.name}</span><br />
                            <span className="leading-relaxed">Research History : Founding Year - {researchHistory?.foundingYear} <br />
                                Notable Discoveries : {researchHistory?.notableDiscoveries?.one}, {researchHistory?.notableDiscoveries?.two}
                            </span><br />
                            <span className="leading-relaxed">Sports : {sports?.one}, {sports?.two}, {sports?.three}, {sports?.fore}.</span>
                            <span className="flex mt-2 items-center border-b-2 border-gray-100 mb-5"></span> */}
                            <Link to={`/details/${0}`}>
                            <div className="flex">
                                <button className=" mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Details</button>
                            </div></Link>
                        </div>
                    </div>
                </div>
                </div>
            </section>      
    </>
    );
};

export default SingleUserAdmissionData;