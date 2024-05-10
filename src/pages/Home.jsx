import React from 'react'
import { useState } from 'react';
import { IoIosDoneAll } from "react-icons/io";
import { MdClass } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer';
import Login from './/Login';   
import Popup from '../components/Popup';

const Home = () => {

    const [showPopup, setShowPopup] = useState(false);

    const handleLoginClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <Header />
            
            {/* Hero Section */}
            <div className="px-40 py-16  bg-[#070A0E]">
                <div className="items-center lg:flex">
                    <div className="lg:w-1/2 pt-0">
                        <div className=" mt-12 lg:max-w-md ">
                            <strong className="font-bold dark:text-white lg:text-5xl">Learn & Share Skills.<br /> Grow Together with <span className="text-[#0038FF] ">Skillify.</span></strong>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">Connect with passionate mentors, learn in-demand skills, and achieve your goals.</p>

                            <button
                                onClick={handleLoginClick}
                                className=" px-5 py-2 mt-6 text-m tracking-wider font-bold text-white uppercase duration-300 bg-[#0038FF] rounded-full lg:w-auto hover:bg-blue-900">
                                Get Started
                            </button>
                            {showPopup && <Popup
                                onClose={handleClosePopup} >
                                <Login/>
                            </Popup>}

                            <div className=" flex flex-row text-[#0038FF] mt-4 ">
                                <IoIosDoneAll className="mt-1" />
                                <p className="pl-1 text-gray-600 dark:text-gray-400">  Experienced Mentor</p>
                            </div>
                            <div className=" flex flex-row text-[#0038FF] mt-2 ">
                                <IoIosDoneAll className="mt-1" />
                                <p className="pl-1 text-gray-600 dark:text-gray-400">  Free for all Students and Professionals</p>
                            </div>

                            <p className="mt-2 text-gray-600 dark:text-gray-400"></p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full lg:mt-0 lg:w-1/2">
                        <img className="w-11/12 h-11/12 lg:max-w-3xl" src="./images/herosection.png" alt="" />
                    </div>
                </div>
            </div>

            {/* Avatars */}
            <div className="py-16  bg-[#070A0E]">
                <p className="text-white font-bold flex items-center justify-center pb-6 mt-0">Join thousands of inspiring Mentors</p>
                <div className="flex justify-center">
                    <img className="object-cover w-12 h-12 -mx-1 rounded-full ring ring-[#014f86]" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100" alt="" />
                    <img className="object-cover w-12 h-12 -mx-1 rounded-full ring ring-[#014f86]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=687&h=687&q=80" alt="" />
                    <img className="object-cover w-12 h-12 -mx-1 rounded-full ring ring-[#014f86]" src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=686&h=686&q=80" alt="" />
                    <img className="object-cover w-12 h-12 -mx-1 rounded-full ring ring-[#014f86]" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0NDAyNjkzfHxlbnwwfHx8fHw%3D" alt="" />
                    <img className="object-cover w-12 h-12 -mx-1 rounded-full ring ring-[#014f86]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=80" alt="" />
                    <img className="object-cover w-12 h-12 -mx-1 rounded-full ring ring-[#014f86]" src="https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <img className="object-cover w-12 h-12 -mx-1 rounded-full ring ring-[#014f86]" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D" alt="" />
                    <img className="object-cover w-12 h-12 -mx-1 rounded-full ring ring-[#014f86]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhY2V8ZW58MHx8MHx8fDA%3D" alt="" />
                    <img className="object-cover w-12 h-12 -mx-1 rounded-full ring ring-[#014f86]" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGZhY2V8ZW58MHx8MHx8fDA%3D" alt="" />
                    <img className="object-cover w-12 h-12 -mx-1 rounded-full ring ring-[#014f86]" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt="" />
                    <img className="object-cover w-12 h-12 -mx-1 rounded-full ring ring-[#014f86]" src="https://images.unsplash.com/photo-1611310424006-42cf1e064288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZhY2V8ZW58MHx8MHx8fDA%3D" alt="" />
                    <img className="object-cover w-12 h-12 -mx-1 rounded-full ring ring-[#014f86]" src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZhY2V8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
                <div className="flex justify-center">
                    <NavLink to="/explore">
                        <button className="items-center justify-center px-5 py-2 mt-7 text-m tracking-wider font-bold text-white duration-300 bg-[#0038FF] rounded-full lg:w-auto hover:bg-blue-900">Explore More</button>
                    </NavLink>
                </div>
            </div>

            {/* Discover Section */}
            <div className="py-16 px-40  bg-[#070A0E]">
                <p className='text-white pb-6'>Discover Your Learning Journey</p>
                <div className='flex flex-row justify-between'>
                    <h1 className="font-bold dark:text-white mr-0 pr-0 lg:text-5xl">Revolutionize Your <br /> <span className="text-[#0038FF] ">Learning</span> Journey</h1>
                    <p className='py-2 px-12 lg:mt-0 lg:w-1/2 dark:text-white'>
                        Start your skill exchange journey!  Find mentors & share your expertise.
                        <NavLink to="/skill">
                            <button className="items-center justify-center ml-40 px-5 py-2 mt-7 text-m tracking-wider font-bold text-white duration-300 bg-[#0038FF] rounded-full lg:w-auto hover:bg-blue-900">Browse Skills</button>
                        </NavLink>
                    </p>

                </div>
            </div>

            <section className="bg-[#070A0E]">
                <div className=" px-40 ps-30 py-0.5 pb-16 mx-auto">
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                        <div className="flex flex-col items-center p-8 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-4  rounded-full dark:text-white bg-[#0038FF]"><MdClass /></span>
                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Interactive Skill Exchange</h1>
                            <p className="text-gray-500 dark:text-gray-300">Maximize real-time collaboration through our digital whiteboard with chat, audio/video, and more. Exchange ideas, provide feedback, and learn together effortlessly.</p>

                            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <span className="mx-1">read more</span><FaArrowRightLong className='w-3 h-4 mx-1 rtl:-scale-x-100' />
                            </a>
                        </div>

                        <div className="flex flex-col items-center p-8 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-4  rounded-full dark:text-white bg-[#0038FF]"><FaClock /></span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Expert Mentorship & Peer-to-Peer Learning</h1>
                            <p className="text-gray-500 dark:text-gray-300">Connect with experienced mentors and fellow learners. Get personalized support, ask questions, and share your knowledge to empower others.</p>

                            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <span className="mx-1">read more</span><FaArrowRightLong className='w-3 h-4 mx-1 rtl:-scale-x-100' />
                            </a>
                        </div>

                        <div className="flex flex-col items-center p-8 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                            <span className="inline-block p-4  rounded-full dark:text-white bg-[#0038FF]"><MdPersonAddAlt1 /></span>

                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Learn & Share Your Expertise</h1>
                            <p className="text-gray-500 dark:text-gray-300"> Join a thriving community of passionate learners and instructors. Master new skills, share your knowledge, and grow together on Skillify.</p>

                            <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <span className="mx-1">read more</span><FaArrowRightLong className='w-3 h-4 mx-1 rtl:-scale-x-100' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Skillify */}
            <div className="px-20 py-16  bg-[#070A0E]">
                <div className="flex flex-row-reverse items-center lg:flex">
                    <div className="lg:w-1/2 pt-5">
                        <div className=" lg:max-w-xl ">
                            <h1 className="font-bold dark:text-white lg:text-5xl">Want to learn in-demand skills & share your expertise? <br /> Choose <span className="text-[#0038FF] ">Skillify</span></h1>
                            <p className="mt-5 text-gray-600 dark:text-gray-400">Learn in-demand skills from passionate mentors and share your expertise to help others. Grow together through a collaborative learning experience.</p>
                            <div className=" pl-14 flex flex-row text-[#0038FF] mt-9 ">
                                <RiCheckboxCircleFill className="mt-1" />
                                <p className="pl-1 text-gray-600 dark:text-gray-400"> Personalized Learning Paths</p>
                            </div>
                            <div className=" pl-14 flex flex-row text-[#0038FF] mt-7 ">
                                <RiCheckboxCircleFill className="mt-1" />
                                <p className="pl-1 text-gray-600 dark:text-gray-400"> Community-Driven Growth</p>
                            </div>
                            <div className=" pl-14 flex flex-row text-[#0038FF] mt-7 ">
                                <RiCheckboxCircleFill className="mt-1" />
                                <p className="pl-1 text-gray-600 dark:text-gray-400"> Build Your Reputation</p>
                            </div>
                            <div className=" pl-14 flex flex-row text-[#0038FF] mt-7 ">
                                <RiCheckboxCircleFill className="mt-1" />
                                <p className="pl-1 text-gray-600 dark:text-gray-400"> Real-World Project Collaboration</p>
                            </div>
                            <div className=" pl-14 flex flex-row text-[#0038FF] mt-7 ">
                                <RiCheckboxCircleFill className="mt-1" />
                                <p className="pl-1 text-gray-600 dark:text-gray-400"> Gamification & Rewards</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full lg:mt-0 lg:w-1/2">
                        <img className="w-11/12 h-11/12 lg:max-w-3xl" src="./images/section2.png" alt="" />
                    </div>
                </div>
            </div>

            {/* Mentors Section */}
            <div className="px-20 py-16  bg-[#070A0E]">
                <h1 className="mt-3 flex justify-center items-center font-bold dark:text-white lg:text-5xl">Our Experienced & Professional Tutors</h1>
                <div className='flex flex-row px-32 justify-between'>
                    <div className="mt-24 max-w-xs rounded-lg dark:bg-gray-800">
                        <img className="object-cover w-full h-56" src="./images/two.jpg" alt="avatar" />
                        <div className="py-5 text-center">
                            <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Neha Aggarwal</a>
                            <span className="text-sm text-gray-700 dark:text-gray-200">Web Development</span>
                        </div>
                    </div>
                    <div className="mt-24 max-w-xs rounded-lg dark:bg-gray-800">
                        <img className="object-cover w-full h-56" src="./images/three.jpg" alt="avatar" />
                        <div className="py-5 text-center">
                            <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Ajay Rathore</a>
                            <span className="text-sm text-gray-700 dark:text-gray-200">Data Analyst</span>
                        </div>
                    </div>
                    <div className="mt-24 max-w-xs rounded-lg dark:bg-gray-800">
                        <img className="object-cover w-full h-56" src="./images/one.jpg" alt="avatar" />
                        <div className="py-5 text-center">
                            <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Janvi Ahuja</a>
                            <span className="text-sm text-gray-700 dark:text-gray-200">Finance</span>
                        </div>
                    </div>
                    <div className="mt-24 max-w-xs rounded-lg dark:bg-gray-800">
                        <img className="object-cover w-full h-56" src="./images/four.jpg" alt="avatar" />
                        <div className="py-5 text-center">
                            <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Arjun Jain</a>
                            <span className="text-sm text-gray-700 dark:text-gray-200">Cyber Security</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-28">
                    <div className="flex items-center space-x-2">
                        <button className=" text-white rounded-full font-bold duration-300 hover:bg-white hover:text-[#0038FF]"><FaArrowCircleLeft className='size-8' /></button>
                        <button className=" text-white rounded-full font-bold duration-300 hover:bg-white hover:text-[#0038FF]"><FaArrowCircleRight className='size-8' /></button>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="px-20 py-16  bg-[#070A0E]">
                <h1 className=" flex justify-center items-center font-bold dark:text-white lg:text-5xl">What people say About Us ?</h1>
                <div className='flex flex-row px-32 justify-around space-x-12'>
                    <div className=" max-w-md px-8 py-4 mt-36 justify-between  rounded-lg dark:bg-gray-800">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img className="object-cover w-20 h-20 border-2 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww" />
                        </div>
                        <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Web Development</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">"This platform is amazing! I learned coding from a pro and helped a writer with their website. Skills exchanged, goals achieved!"</p>
                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-lg font-medium text-blue-600 " tabindex="0" role="link">Allen Shah</a>
                        </div>
                    </div>
                    <div className=" max-w-md px-8 py-4 mt-36 rounded-lg dark:bg-gray-800">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img className="object-cover w-20 h-20 border-2  rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                        <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Data Science</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">"Data science has been a career game-changer, equipping me with essential skills and drive impactful insights for me."</p>
                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-lg font-medium text-blue-600 " tabindex="0" role="link">Dinesh Kolli</a>
                        </div>
                    </div>
                    <div className=" max-w-md px-8 py-4 mt-36 rounded-lg dark:bg-gray-800">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img className="object-cover w-20 h-20 border-2 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww" />
                        </div>
                        <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Graphic Design</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">"Great community for sharing knowledge! Found a patient graphic design tutor and met other students eager to learn too." </p>
                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-lg font-medium text-blue-600" tabindex="0" role="link">Jayeesh Gaikwaad</a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-28">
                    <div className="flex items-center space-x-2">
                        <button className=" text-white rounded-full font-bold duration-300 hover:bg-white hover:text-[#0038FF]"><FaArrowCircleLeft className='size-8' /></button>
                        <button className=" text-white rounded-full font-bold duration-300 hover:bg-white hover:text-[#0038FF]"><FaArrowCircleRight className='size-8' /></button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home