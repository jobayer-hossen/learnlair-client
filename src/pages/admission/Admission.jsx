import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleAdmission from './SingleAdmission';
import useTitle from '../../components/hooks/useTitle';

const Admission = () => {
    useTitle('Admission');
    const allData = useLoaderData();
    return (
        <>
           <div className='grid lg:grid-cols-3 sm:grid-cols-1 w-[90%] mx-auto gap-5 mt-5 mb-5'>
        {
            allData.slice(1,10).map(data=> <SingleAdmission key={data._id} data={data}/>)
        }
      </div>  
        </>
    );
};

export default Admission;