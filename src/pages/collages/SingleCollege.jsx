import React from 'react';

const SingleCollege = ({data}) => {
    const { collegeName,collegeRating, admissionDates, events, researchHistory, sports, collegeImage , _id} = data;
    return (
    <>
      {/*<!-- Component: Basic blog card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 p-5">
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
          <p className="leading-relaxed">Number of Research  : {admissionDates?.fall} - {admissionDates?.spring}.
          </p>
        </div>
      </div>
      {/*<!-- End Basic blog card --> */}        
    </>
    );
};

export default SingleCollege;