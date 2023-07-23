import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCollege from './SingleCollege';
import { AuthContext } from '../../provider/AuthProvider';

const MyCollege = () => {
    const {user} = useContext(AuthContext);
    const [collegeData, setCollegeData] = useState([]);
    useEffect(()=>{
        fetch(`https://learn-lair-server-emonhasan007.vercel.app/myCollege/${user?.email}`)
        .then((data)=> data.json())
        .then((data)=> setCollegeData(data))
    },[]);
    console.log(collegeData)
    return (
    <>
        <div className='w-[80%] mx-auto'>
            {
                collegeData.map((data)=> <SingleCollege key={data._id} data={data} />)
            }
        </div>    
    </>
    );
};

export default MyCollege;