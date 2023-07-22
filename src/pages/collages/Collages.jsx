import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCollege from './SingleCollege';

const Collages = () => {
    const allData = useLoaderData();
    console.log(allData);
    return (
    <>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 w-[90%] mx-auto gap-5 mt-5 mb-5'>
        {
            allData.map(data=> <SingleCollege key={data._id} data={data}></SingleCollege>)
        }
      </div>    
    </>
    );
};

export default Collages;