import React from 'react';

const ResearchPaper = () => {
    return (
    <>
    <p className='text-3xl text-center mt-8'>Research Paper</p>
    <p className='text-center mb-8'>"Our meticulously crafted research papers delve into critical topics, offering comprehensive analysis and evidence-based insights. <br/> Trust our expertise for credible, academically sound, and thought-provoking content to elevate your understanding."</p>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 w-[85%] mx-auto mb-8 gap-2'>
            <div>
                <div>
                    {/*<!-- Component: Blog card with action button --> */}
      <div className="w-[90%] mx-auto overflow-hidden rounded bg-blue-50 text-slate-500 shadow-md shadow-slate-200">
        <div className="p-6">
          <header className="mb-4 flex gap-4">
            <div>
              <h3 className="text-xl font-medium text-slate-700">
              Introduction to Energy in the Environment
              </h3>
              <p className="text-sm text-slate-400">February 6 2019</p>
            </div>
          </header>
          <p>
          Explore the vital topic of Energy in the Environment through the lens of innovation, presented by Tech Institute's bright students.
          </p>
        </div>
        {/*  <!-- Action base sized link button --> */}
        <div className="text-center gap-2 p-2 pt-0">
          <a href="https://www.phys.soton.ac.uk/sites/www.phys.soton.ac.uk/files/PHYS2015-answers1415.pdf" target="_blank">
          <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center bg-blue-200 whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-blue-500 transition duration-300 hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-200 focus:text-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-blue-300 disabled:shadow-none disabled:hover:bg-transparent">
            <span>See Research Paper</span>
          </button>
          </a>
        </div>

      </div>
      {/*<!-- End Blog card with action button --> */} 
      
       
                </div>
            </div>

            <div>
            <div className="w-[90%] mx-auto overflow-hidden rounded bg-blue-50 text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 flex gap-4">
            <div>
              <h3 className="text-xl font-medium text-slate-700">
              Introduction to the Nanoworld
              </h3>
              <p className="text-sm text-slate-400">May 21 2018</p>
            </div>
          </header>
          <p>
          Environmental Institute of Sustainability students introduce the Nanoworld's diverse applications, from sustainability innovations to medical breakthroughs and cutting-edge technologies.
          </p>
        </div>
        {/*  <!-- Action base sized link button --> */}
        <div className="text-center gap-2 p-2 pt-0">
          <a href="https://www.phys.soton.ac.uk/sites/www.phys.soton.ac.uk/files/PHYS1026-1314.pdf" target="_blank">
          <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center bg-blue-200 whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-blue-500 transition duration-300 hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-200 focus:text-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-blue-300 disabled:shadow-none disabled:hover:bg-transparent">
            <span>See Research Paper</span>
          </button>
          </a>
        </div>

      </div>
            </div>
            <div>
            <div className="w-[90%] mx-auto overflow-hidden rounded bg-blue-50 text-slate-500 shadow-md shadow-slate-200">
        
        
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 flex gap-4">
            <div>
              <h3 className="text-xl font-medium text-slate-700">
              Theories of Matter, Space and Time
              </h3>
              <p className="text-sm text-slate-400">Jun 3 2015</p>
            </div>
          </header>
          <p>
          Embark on an enlightening journey with Technology Institute of Robotics students, exploring Theories of Matter, Space, and Time, unraveling the fabric of our cosmos.
          </p>
        </div>
        {/*  <!-- Action base sized link button --> */}
        <div className="text-center gap-2 p-2 pt-0">
          <a href="https://www.phys.soton.ac.uk/sites/www.phys.soton.ac.uk/files/PHYS3007-answers1415.pdf" target="_blank">
          <button className="inline-flex mt-5 h-10 items-center justify-center gap-2 justify-self-center bg-blue-200 whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-blue-500 transition duration-300 hover:bg-blue-100 hover:text-blue-600 focus:bg-blue-200 focus:text-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-blue-300 disabled:shadow-none disabled:hover:bg-transparent">
            <span>See Research Paper</span>
          </button>
          </a>
        </div>

      </div>
            </div>
            
        </div>        
    </>
    );
};

export default ResearchPaper;