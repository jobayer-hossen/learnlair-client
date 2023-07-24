import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const SingleCollege = ({data}) => {
    const { collegeName,collegeRating, admissionDates, events, researchHistory, sports, collegeImage , _id} = data;
    return (
    <>
    <Fade bottom>
      {/*<!-- Component: Basic blog card --> */}
      <div className="overflow-hidden rounded bg-blue-50 text-slate-500 shadow-md shadow-slate-200 p-5">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={collegeImage}
            alt="card image"
            className="aspect-video w-full rounded"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              {collegeName}
            </h3>
            <p className="text-sm text-slate-400">College Rating : {collegeRating}</p>
          </header>
          <p className="leading-relaxed">Admission Date : {admissionDates?.fall} - {admissionDates?.spring}.
          </p>
          <p className="leading-relaxed">Number of Research  : {researchHistory.notableDiscoveries?.one}, {researchHistory.notableDiscoveries.two}.
          </p>
        </div>
        <Link to={`/details/${_id}`}>
                            <div className="flex">
                                <button className=" mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Details</button>
          </div></Link>
      </div>
      {/*<!-- End Basic blog card --> */} 
      </Fade>       
    </>
    );
};

export default SingleCollege;