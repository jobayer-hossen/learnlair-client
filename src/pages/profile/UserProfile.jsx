import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import SingleUserAdmissionData from './SingleUserAdmissionData';

const UserProfile = () => {
    const {user} = useContext(AuthContext);

    const [collegeData, setCollegeData] = useState([]);
    useEffect(()=>{
        fetch(`https://learn-lair-server-emonhasan007.vercel.app/myCollege/${user?.email}`)
        .then((data)=> data.json())
        .then((data)=> setCollegeData(data))
    },[]);
    console.log(collegeData);


    return (
    <>
    <div className='mt-10 mb-5 gap-6 lg:px-12 flex flex-col md:flex-row lg:flex-row'> 
        <div className='mx-auto lg:w-[30%]  bg-amber-300'>

        {/*<!-- Component: User profile card --> */}
      <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
                        <div className="flex flex-col items-center mt-6 -mx-2 ">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full ring ring-success ring-offset-base-100 ring-offset-2" src={user?.photoURL} alt="avatar" />
                </div>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              {user?.displayName}
            </h3>
            <p className=" text-slate-400">{user?.email}</p>
          </header>
        </div>
        {/*  <!-- Action base sized with lead icon buttons  --> */}
        <div className="justify-center gap-2 p-6 pt-0">
          <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
            <span className="order-2">Log Out</span>
          </button>
        </div>
      </div>
      {/*<!-- End User profile card --> */}


        
        </div>





        <div className='mx-5 gap-4 lg:w-[70%] md:w-[40%] bg-red-100'>

        {
            collegeData.map((data)=> <SingleUserAdmissionData key={data?._id} data={data} /> )
        }

        </div>
    </div>     
    </>
    );
};

export default UserProfile;