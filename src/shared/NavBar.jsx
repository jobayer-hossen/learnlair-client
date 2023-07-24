import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
  const {user,logOutUser} = useContext(AuthContext);
    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const handleLogout = ()=>{
      logOutUser()
      .then()
      .catch(error => {console.error(error)});
    }
    return (
    <>
    {/*<!-- Component: Navbar with user profile --> */}
    {/*<!-- Header --> */}
    <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
      <div className="relative mx-auto max-w-full lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          className="flex h-[6.5 rem] items-stretch justify-between font-medium text-slate-700"
          role="navigation"
        >
          {/*      <!-- Brand logo --> */}
          <div className='flex justify-end w-[40%] items-start mt-3'>
              <div className='flex items-center'><img className='w-[8%] logo ' src="https://i.ibb.co/K7dfPJz/lebanese-7631380.png" alt="" />
              <p className='text-3xl ms-5 text-blue-500' >LearnLair</p>
              </div>
            </div>
          
          {/*      <!-- Mobile trigger --> */}
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden
            ${
              isToggleOpen
                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                : ""
            }
          `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
            </div>
          </button>
          {/*      <!-- Navigation links --> */}
          <ul
            role="menubar"
            aria-label="Select page"
            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
              isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm"
                : "invisible opacity-0"
            }`}
          >
            <li role="none" className="flex items-stretch">
              <NavLink
              to='/'
                role="menuitem"
                aria-current="page"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 py-4  transition-colors duration-300 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8"
                
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li role="none" className="flex items-stretch">
              <NavLink to='/colleges'
                role="menuitem"
                aria-current="page"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 py-4  transition-colors duration-300 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8"
                
              >
                <span>Colleges</span>
              </NavLink>
            </li>
            <li role="none" className="flex items-stretch">
              <NavLink
              to='/admission'
                role="menuitem"
                aria-current="page"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 py-4  transition-colors duration-300 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8"
                
              >
                <span>Admission</span>
              </NavLink>
            </li>
            <li role="none" className="flex items-stretch">
              <NavLink
              to='/myCollege'
                role="menuitem"
                aria-current="page"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 py-4  transition-colors duration-300 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8"
                
              >
                <span>My College</span>
              </NavLink>
            </li>
            { user ?<><li role="none" className="flex items-stretch">
                <button onClick={handleLogout} className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8" >
                <span>Sign Out</span>
                </button>
              </li></> : <><li role="none" className="flex items-stretch">
                <NavLink to='/login' className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:bg-blue-50 focus:outline-none focus-visible:outline-none lg:px-8" >
                <span>Login</span>
                </NavLink>
              </li></>}
          </ul>
          <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
            {/*        <!-- user profile --> */}
            {user && <Link
            to='/profile'
            >
              {user?.displayName}
            </Link>}
            {/*        <!-- End user profile --> */}
          </div>
        </nav>
      </div>
    </header>
    {/*<!-- End Navbar with user profile--> */}

    </>
    );
};

export default NavBar;