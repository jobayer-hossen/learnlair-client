import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../components/hooks/useTitle';

const EditForm = () => {
  useTitle('Update Form');
    const getData = useLoaderData();
    const {collegeImage,collegeName,candidateName,subjectName,candidateEmail,phoneNumber,address,dateOfBirth,_id,collegeDetails,image}= getData;
    const { register, handleSubmit, reset } = useForm();
    const editCandidateInformation= (data) =>{
        const {candidateName , candidateEmail , address, collegeName} = data;

        const updateData= { 
            candidateName:candidateName,
             candidateEmail:candidateEmail,
             address:address,
             collegeName:collegeName
            }
        

        fetch(`https://learn-lair-server-emonhasan007.vercel.app/updateCandidateData/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateData)
                })
                    .then(res => res.json())
                    .then(data => {
                        
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
    return (
    <>
      <div className='lg:w-[50%] sm:w-full mx-auto mt-8 mb-10'>
        {/*<!-- Component: Card with form --> */}
      <form
      onSubmit={handleSubmit(editCandidateInformation)}
      className="overflow-hidden rounded bg-blue-50 text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 text-center">
            <h3 className="text-xl font-medium text-slate-700">{collegeName} <br/> college admission candidate information update form</h3>
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
                id="id-b06"
                type="text"
                name="subjectName"
                {...register("collegeName" , { required: true})}
                placeholder="your name"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b06"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                College Name
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
          </div>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-end p-6 ">
          <button
          type='submit'
          className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
            <span>Save</span>
          </button>
        </div>
      </form>
      {/*<!-- End Card with form --> */}
      </div>      
    </>
    );
};

export default EditForm;