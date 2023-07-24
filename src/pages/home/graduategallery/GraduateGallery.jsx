import React from 'react';
import Fade from 'react-reveal/Fade';
const GraduateGallery = () => {
    return (
        <>
        <Fade bottom>
            <p className="text-3xl mt-16 text-center">Graduate Gallery</p>
            <p className='text-center'>"Welcome to our Graduate Gallery, showcasing the exceptional works of our talented graduates.<br/> Explore creativity, innovation, and passion brought to life in diverse disciplines. Enjoy the artistry!"</p>

            <div className='mt-10 mb-5 gap-6 lg:px-12 flex flex-col sm:flex-col lg:flex-row'>
                <div className='mx-5 gap-4 grid sm:grid-cols-1 lg:grid-cols-3 lg:w-[100%]'>



                <div className="group rounded w-[48] relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="w-[100%]">
                            <img className=" w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://img.freepik.com/premium-photo/group-graduate-students-masters-black-robes-mantle-square-hats-with-diplomas-their-hands-take-selfies-smartphone-camera_74906-3257.jpg?w=740" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className=" text-xl text-white">University of Exampleville</h1>
                            <p className="mb-3 font-thin italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">"Congratulations to the graduates of University of Exampleville! A momentous achievement celebrating knowledge, excellence, success, and future endeavors."</p>

                        </div>
                    </div>




                    <div className="group rounded w-[48] relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="w-[100%]">
                            <img className=" w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://img.freepik.com/premium-photo/happy-university-graduates-throwing-their-graduation-caps-into-air_627829-10090.jpg?w=740" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className=" text-xl text-white">Art Institute of Creativity</h1>
                            <p className="mb-7 font-thin italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">"Commencement at Art Institute of Creativity, honoring talent, imagination, growth, and artistic brilliance. Congratulations graduates!"</p>

                        </div>
                    </div>



                    <div className="group rounded w-[48] relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="w-[100%]">
                            <img className=" w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://img.freepik.com/premium-photo/group-multietnic-graduate-students-celebrating-by-holding-their-diploma-education-qualification-gown-concept_116547-16294.jpg?w=740" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className=" text-xl text-white">Technology Institute of Robotics</h1>
                            <p className="mb-8 font-thin italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">"Cheers to Technology Institute of Robotics grads! Mastering innovation, automation, and engineering for a cutting-edge future."</p>

                        </div>
                    </div>


                    <div className="group rounded w-[48] relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="w-[100%]">
                            <img className=" w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://img.freepik.com/premium-photo/group-students-attending-graduation-ceremony-nice-day_115086-774.jpg?w=740" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className=" text-xl text-white">School of Journalism and Media</h1>
                            <p className="mb-6 font-thin italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">"Congratulations, School of Journalism and Media graduates! Equipped to shape truth, storytelling, and global communication."</p>

                        </div>
                    </div>


                    <div className="group rounded w-[48] relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="w-[100%]">
                            <img className=" w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://img.freepik.com/premium-photo/happy-students-bachelor-robes-outdoors_392895-25752.jpg?w=740" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className=" text-xl text-white">Culinary Institute of Gastronomy</h1>
                            <p className="mb-7 font-thin italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">"Kudos, Culinary Institute of Gastronomy grads! Experts in flavors, culinary arts, and gastronomic delights."</p>

                        </div>
                    </div>


                    <div className="group rounded w-[48] relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="w-[100%]">
                            <img className=" w-[100%] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://img.freepik.com/premium-photo/group-multiethnic-graduate-students-celebrating-by-cheering-with-their-diplomas-education-qualification-graduation-concept_116547-16297.jpg?w=740" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className=" text-xl text-white">Business School of Entrepreneurship</h1>
                            <p className="mb-7 font-thin italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">"Congrats, Business School of Entrepreneurship grads! Ready to lead, innovate, and drive economic growth."</p>

                        </div>
                    </div>


                </div>
            </div>
            </Fade>
        </>
    );
};

export default GraduateGallery;