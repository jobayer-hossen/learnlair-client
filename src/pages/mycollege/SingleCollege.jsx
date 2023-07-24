import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const SingleCollege = ({data}) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const {collegeImage,collegeName,candidateName,subjectName,candidateEmail,phoneNumber,address,dateOfBirth,_id,collegeDetails,image}= data;

    const [rating, setRating] = useState(0);

    const handleReview=(event)=>{
        event.preventDefault();
        if(user && user.email){
        
        const form = event.target;
        const review = form.reviewText.value;
        const storeReview = {review,rating,image,candidateName,collegeName};
        // console.log(storeReview);
        fetch('https://learn-lair-server-emonhasan007.vercel.app/addReview', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(storeReview)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.insertedId) {
                            event.target.reset();
                            Swal.fire({
                                title: 'Success!',
                                text: 'Your Review added Successfully !',
                                icon: 'success',
                                confirmButtonText: 'Okay'
                            })
                        }
                    })
                }else{
                    Swal.fire({
                    title: 'Please Login First',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Login Now'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate('/login')
                      
                    }
                  })}
    }
    return (
    <>
    <Fade bottom>
      <section className="text-gray-600 w-[90%] body-font overflow-hidden mx-auto mt-8 mb-8 shadow-xl">
                <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                    <div>
                    <img alt="ecommerce" className="w-[65%] rounded mx-auto" src={collegeImage} />
                    <div className='w-[90%] mx-auto'>
                        <p className='text-2xl text-center mt-3 text-black'>{collegeName}</p>
                        <p className='text-sm text-center'>
                        {collegeDetails}
                        </p>
                    </div>
                    </div>
                <div className="container mx-auto mb-3">
                    <div className="mx-auto">
                        {/* <img alt="ecommerce" className="lg:w-1/2 w-full rounded" src={collegeImage} /> */}
                        <div className="w-[95%] mx-auto">
                             <div className="flex flex-col items-center mt-6 mb-10 -mx-2 ">
                    <img className="object-cover w-32 h-32 mx-2 rounded-full ring ring-success ring-offset-base-100 ring-offset-2" src={image} alt="avatar" />
                </div>
                            <span className="leading-relaxed">Subject Name : {subjectName}</span><br />
                            <span className="leading-relaxed">Candidate Name : {candidateName}</span><br />
                            <span className="leading-relaxed">Date of Birth : {dateOfBirth}</span><br/>
                            <span className="leading-relaxed">Candidate Email :  {candidateEmail}
                            </span><br />
                            <span className="leading-relaxed">Phone Number : {phoneNumber}</span><br/>
                            <span className="leading-relaxed">Address : {address}</span><br/>
                            <span className="flex mt-2 items-center border-b-2 border-gray-100 mb-5"></span>
                            {/* <Link to={`/details/${_id}`}>
                            <div className="flex">
                                <button className=" mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Details</button>
                            </div></Link> */}
                        </div>
                    </div>
                </div>
                </div>
                <p className='text-2xl text-center mb-2'>Give your Feedback</p>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 mb-5'>
                    
                    <div className='mx-auto mt-8'>
                    <Rating
      style={{ maxWidth: 220}}
      value={rating}
      onChange={setRating}
      isRequired
    />
                    </div>
                    <div className='w-[90%] mx-auto'>
        
        <div className="relative">
        <form onSubmit={handleReview}>
        <textarea
          id="id-l03"
          type="text"
          name="reviewText"
          rows="3"
          placeholder="Write your message"
          className="peer relative w-full rounded border border-slate-200 p-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        ></textarea>
        <label
          htmlFor="id-l03"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Write your valuable comment...
        </label>
        <button type='submit' className=" w-full inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-blue-500 px-5 text-sm font-medium tracking-wide text-blue-500 shadow-md shadow-blue-200 transition duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-sm hover:shadow-blue-200 focus:border-blue-700 focus:text-blue-700 focus:shadow-sm focus:shadow-blue-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:text-blue-300 disabled:shadow-none">
        Submit Review
      </button>
        </form>
      </div>
      
        
      {/*<!-- End Rounded large size textarea with helper text --> */}
                    </div>
                </div>
            </section>  </Fade>    
    </>
    );
};

export default SingleCollege;