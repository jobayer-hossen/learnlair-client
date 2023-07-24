import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../components/hooks/useTitle';


const imageToken = import.meta.env.VITE_imageBB_Token;
const imageURLApi = `https://api.imgbb.com/1/upload?key=${imageToken}`

const AdmissionForm = () => {
  useTitle('Admission Form');
    const {user} = useContext(AuthContext);
    
    const getData = useLoaderData();
    // console.log(getData);
    const{collegeName,_id,collegeDetails,collegeImage}=getData;

    const { register, handleSubmit, reset } = useForm();

    const candidateInformation= (data) =>{

        const formData = new FormData();
        formData.append('image', data.image[0])
        // console.log(data.image[0]);
        fetch(imageURLApi, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imageURL = imgResponse.data.display_url;
                const {candidateName , subjectName , candidateEmail , phoneNumber, address, dateOfBirth} = data;
                const storeCandidateData = {candidateName, subjectName, candidateEmail, phoneNumber , address, image:imageURL ,dateOfBirth, collegeID:_id, collegeDetails:collegeDetails,collegeName:collegeName,collegeImage:collegeImage, email:user?.email};
                // console.log(storeCandidateData);
                fetch('https://learn-lair-server-emonhasan007.vercel.app/addCandidateData', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(storeCandidateData)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.insertedId) {
                            reset();
                            Swal.fire({
                                title: 'Success!',
                                text: 'Your Application Was Successfully Applied',
                                icon: 'success',
                                confirmButtonText: 'Okay'
                            })
                        }
                    })
            }
        })
        
    }




    return (
    <>
      <div className='lg:w-[50%] sm:w-full mx-auto mt-8 mb-10'>
        {/*<!-- Component: Card with form --> */}
      <form
      onSubmit={handleSubmit(candidateInformation)}
      className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 text-center">
            <h3 className="text-xl font-medium text-slate-700">{collegeName} college admission form</h3>
          </header>
          <div className="flex flex-col">
            {/*      <!-- Input field --> */}
            
            <div className="relative my-6">
              <input
                id="id-b03"
                type="text"
                name="candidateName"
                placeholder="your name"
                {...register("candidateName" , { required: true})}
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b03"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Candidate Full Name
              </label>
            </div>

            <div className="relative my-6">
              <input
                id="id-b04"
                type="text"
                name="subjectName"
                {...register("subjectName" , { required: true})}
                placeholder="your name"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b04"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Candidate Chosen Subject Name
              </label>
            </div>

            <div className="relative my-6">
              <input
                id="id-b05"
                type="email"
                name="candidateEmail"
                {...register("candidateEmail" , { required: true})}
                placeholder="your name"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b05"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
               Candidate Email Address
              </label>
            </div>

            <div className="relative my-6">
              <input
                id="id-b06"
                type="text"
                name="number"
                {...register("phoneNumber" , { required: true})}
                placeholder="your name"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b06"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Candidate Phone Number
              </label>
            </div>


            <div className="relative my-6">
              <input
                id="id-b07"
                type="text"
                name="fullAddress"
                {...register("address" , { required: true})}
                placeholder="your name"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b07"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
               Candidate Address
              </label>
            </div>

            <div className="relative my-6">
              <input
                id="id-b08"
                type="date"
                name="dateOfBirth"
                {...register("dateOfBirth" , { required: true})}
                placeholder="your name"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b08"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
               Candidate Date of Birth
              </label>
            </div>

            <div>
                <label className="text-xs text-slate-400" >Candidate </label>

                    <input type="file" {...register("image", { required: true })}className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-blue-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full y-200  placeholder-gray-400/70 ray-500 focus:border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40 " />
                </div>
            
          


          </div>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-end p-6 ">
          <button
          type='submit'
          className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
            <span>Submit</span>
          </button>
        </div>
      </form>
      {/*<!-- End Card with form --> */}
      </div>
    </>
    );
};

export default AdmissionForm;