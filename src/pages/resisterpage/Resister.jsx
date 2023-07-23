import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Lottie from "lottie-react";
import resisterAnimation from '../../../public/resister/animation_lkdqax2a.json'

const Resister = () => {
    const {createNewUser,updateProfile} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success ,setSuccess] = useState('')
    const handleResister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;


        //  email and password validating --
        setError('');
        if (email === '') {
            setError('Please write a valid Email');
            return
        }
        else if (password === '') {
            setError('Please write strong password');
            return
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters long');
            return
        }
        event.target.reset();

        createNewUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                updateUserProfile(result.user, name, photo);
                setError('');
            })
            .catch(error => 
                console.log(error)
            )
    };


    const updateUserProfile = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(result => {
                const updateUserData = result.user;
                console.log(updateUserData);
                setSuccess('Your profile update successfully');
                setError('');
            })
            .catch(error => {
                setError('');
            })
    };
    return (
    <>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
    <div className="w-full mx-auto relative max-w-md p-4 rounded-md shadow-2xl sm:p-8">
                <h2 className="mb-3 text-3xl font-semibold text-center">Resister your account</h2>
                
                <form onSubmit={handleResister} className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="text" className="block text-sm">Name</label>
                            <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md " />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email</label>
                            <input type="email" name="email" id="email" placeholder="example@company.com" className="w-full px-3 py-2 border rounded-md " />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <input type="password" name="password" id="password" placeholder="******" className="w-full px-3 py-2 border rounded-md" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="text" className="block text-sm">Photo URL</label>
                            <input type="text" name="photo" id="photo" placeholder="URL" className="w-full px-3 py-2 border rounded-md " />
                        </div>
                        <p className="text-sm text-center text-black">Already have an account ?
                    <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline"> Login here </Link>
                </p>
                        <div>
                             <span className='text-base font-bold text-red-600 text-center '>{error}</span>
                        </div>

                    </div>
                    <button type="submit" className="w-full bg-blue-100 text-blue-500 px-8 py-3  rounded-md ">Resister</button>
                </form>
      </div>  

      <div className="w-full max-w-sm p-6 m-auto mx-auto ">
                        <Lottie animationData={resisterAnimation} loop={true} />
    </div>
    </div>
          
    </>
    );
};

export default Resister;