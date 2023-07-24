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
                            <p className="leading-relaxed">Subject Name : {subjectName}</p>
                            <p className="leading-relaxed">Candidate Name : {candidateName}</p>
                            <p className="leading-relaxed">Date of Birth : {dateOfBirth}
                            </p>
                            <p className="leading-relaxed">Phone Number : {phoneNumber}</p>
                            <p className="leading-relaxed">Email : {candidateEmail}
                            </p>
                            <p className="leading-relaxed">Address : {address}
                            </p>
                            <p className="flex mt-2 items-center border-b-2 border-gray-100 mb-5"></p>
                            <Link to={`/editCandidateData/${_id}`}>
                            <div className="flex">
                                <button className=" mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Edit</button>
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