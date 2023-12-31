import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Lottie from "lottie-react";
import loginAnimation from '../../../public/login/animation_lkdqngcl.json'
import useTitle from '../../components/hooks/useTitle';
import Swal from 'sweetalert2';

const Login = () => {
    useTitle('Login');
    const navigate = useNavigation();
    const {emailSignIn,googleLogin,githubLogin,resetPassword}= useContext(AuthContext);
    const emailRef = useRef();
    const [error, setError] = useState('');
    const [success ,setSuccess] = useState('')
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        event.target.reset();

        setError('');
        if (email === '') {
            setError('Please write your resister Email');
            return
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters long');
            return
        }
        else if (password === '') {
            setError('Please type your password');
            return
        }

        // login by email and password--
        emailSignIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess("You have successfully logged in to your account .!");
                setError('');
                navigate(from, { replace: true });

            })
            .catch(error => {
                setError(error.message);
                setError('Password Dose not match')
            })
            
    }
    const handleResetPassword =() =>{
        const email = emailRef.current.value
        if(!email){
            alert('Please provide valid email')
            return;
        }
        resetPassword(email)
        .then(() => {
            Swal.fire({
                title: 'warning',
                text: 'Check your inbox or spam box !',
                icon: 'warning',
                confirmButtonText: 'Okay'
            })
        })
        .catch(error => console.error(error));
    }
    
    // Google login --
    const handleGithub = () => {
        githubLogin()
        .then(result => {
            const githubUser = result.user;
            console.log(githubUser);
            // setSuccess("Welcome back ! Your Google account successfully logged .");
            // setError('');
            // navigate(from, { replace: true });
            Swal.fire({
                title: 'Success!',
                text: 'Your account log in Successfully!',
                icon: 'success',
                confirmButtonText: 'Okay'
            })
        })
        .catch(error => {
            console.log(error)
            // setError(error.message);
            // setSuccess('');
        });
    }
    // google login --
    const handleGoogle = () => {
        googleLogin()
        .then(result => {
            const googleUser = result.user;
            console.log(googleUser);
            // setSuccess("Welcome back ! Your Google account successfully logged .");
            // setError('');
            Swal.fire({
                title: 'Success!',
                text: 'Your account log in Successfully!',
                icon: 'success',
                confirmButtonText: 'Okay'
            })
            navigate(from, { replace: true });

        })
        .catch(error => {
            console.log(error)
            // setError(error.message);
            // setSuccess('');
        });
    }
    return (
        <>
        <div className=' grid lg:grid-cols-2 sm:grid-cols-1'>

        <div className="w-full mt-10 mb-5 mx-auto  max-w-md p-4 rounded-md sm:p-8   text-black shadow-2xl">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login your account</h2>


                <form onSubmit={handleLogin} className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email</label>
                            <input ref={emailRef} type="email" name="email" id="email" placeholder="example@company.com" className="w-full px-3 py-2 border rounded-md " />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md " />
                        </div>
                        
                        <button className='text-center' onClick={handleResetPassword}>Forget Password</button>
                        

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
                            <button onClick={handleGithub} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
                                <p>Login with GitHub</p>
                            </button>
                            

                        </div>
                        <p className="text-base text-center text-black">Don't have account ?
                            <Link to='/resister' rel="noopener noreferrer" className="focus:underline hover:underline"> Resister here</Link>
                        </p>

                        <div>
                            <p className='text-base font-bold text-red-600 text-center '>{error}</p>
                            <p className='text-base font-bold text-lime-500 text-center '>{success}</p>
                        </div>
                    </div>




                    <button type="submit" className="w-full bg-blue-100 text-blue-500 px-8 py-3 rounded-md">Sign in</button>
                </form>
            </div>

              <div className="w-full max-w-sm p-6 m-auto mx-auto ">
                        <Lottie animationData={loginAnimation} loop={true} />
                    
    </div>          


        </div>
            
        </>
    );
};

export default Login;