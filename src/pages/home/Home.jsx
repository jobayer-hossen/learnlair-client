import React, { useEffect, useState } from 'react';
import CollageCard from './CollageCard';
import { useLoaderData } from 'react-router-dom';
import GraduateGallery from './graduategallery/GraduateGallery';
import StudentReview from './studentreview/StudentReview';

const Home = () => {
    const allData = useLoaderData();
const [data, getData] = useState(allData);

    const searchField = (event) => {
        event.preventDefault();
        const form = event.target;
        const collageName = form.collageName.value;
        fetch(`https://learn-lair-server-emonhasan007.vercel.app/searchName/${collageName}`)
            .then((res) => res.json())
            .then((data) => {
                getData(data);
            });
            event.target.reset();
    }
    
    return (
        <>
            <section className="text-gray-600 body-font bg-blue-100">
                <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">

                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-8xl mb-4 text-gray-900">LearnLair</h1>
                        <p className="mb-8 leading-relaxed">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p>
                    </div>
                    <div className='lg:w-[40%] sm:w-[100%]'>
                    <form onSubmit={searchField}>   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
        <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input name='collageName' type="search"  className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Collage Name"/>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
    </form>
                    </div>
                </div>
            </section>
           <div className='grid lg:grid-cols-3 sm:grid-cols-1 mt-6 mb-6 mx-auto'>
           {
                data.slice(0,3).map(data=>
                    <CollageCard key={data._id} data={data}/>
                    )
            }
            </div>

            <GraduateGallery/>
            <StudentReview/>
            {/* {
                allReview.map((review)=> <StudentReview key={review._id} review={review} /> )
            } */}
        </>
    );
};

export default Home;