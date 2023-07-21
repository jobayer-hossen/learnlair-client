import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {googleLogin}= useContext(AuthContext);
    const handleLogin = (event) =>{

    }
    const handleGoogle = () => {
        googleLogin()
        .then(result => {
            const googleUser = result.user;
            console.log(googleUser);
            // setSuccess("Welcome back ! Your Google account successfully logged .");
            // setError('');
            // navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error)
            // setError(error.message);
            // setSuccess('');
        });
    }
    return (
        <>
            <div className='animation'>

                <div className="flex items-center justify-center ">
                    <div className="relative">
                        <div className="  absolute rounded-full top-72 left-4 w-72 h-72 bg-lime-500 filter blur-2xl mix-blend-multiply opacity-75 "></div>


                        <div className=" absolute rounded-full top-72 -right-4 w-72 h-72  bg-amber-500 filter blur-2xl mix-blend-multiply opacity-75  "></div>

                        <div className=" absolute rounded-full top-20 -right-4 w-72 h-72 bg-fuchsia-500 filter blur-2xl  mix-blend-multiply opacity-75  animation-delay-4s"></div>

                        <div className=" absolute rounded-full top-20 -left-4 w-72 h-72 bg-teal-500 filter blur-2xl mix-blend-multiply opacity-75 "></div>

                    </div>
                </div>


            </div>


            <div className="w-full mt-10 mb-5 relative mx-auto  max-w-md p-4 rounded-md sm:p-8   text-black shadow-2xl">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login your account</h2>


                <form onSubmit={handleLogin} className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email</label>
                            <input type="email" name="email" id="email" placeholder="example@company.com" className="w-full px-3 py-2 border rounded-md " />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md " />
                        </div>

                        <div className="flex items-center w-full my-4">
                            <hr className="w-full text-black" />
                            <p className="px-3 text-black">OR</p>
                            <hr className="w-full text-black" />
                        </div>

                        <div className="my-6 space-y-4">
                            <button onClick={handleGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                                <p>Login with Google</p>
                            </button>

                        </div>
                        <p className="text-base text-center text-black">Don't have account ?
                            <Link to='/resister' rel="noopener noreferrer" className="focus:underline hover:underline"> Resister here</Link>
                        </p>

                        {/* <div>
                            <p className='text-base font-bold text-red-600 text-center '>{error}</p>
                            <p className='text-base font-bold text-lime-500 text-center '>{success}</p>
                        </div> */}
                    </div>




                    <button type="submit" className="w-full text-white px-8 py-3 font-semibold rounded-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">Sign in</button>
                </form>
            </div>
        </>
    );
};

export default Login;