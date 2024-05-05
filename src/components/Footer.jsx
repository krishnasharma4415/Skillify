import React from 'react';
import { FaReddit } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="px-20 py-20  bg-[#070A0E]">
            <div class="container px-6 py-8 mx-auto">
                <div class="flex flex-col items-center text-center">
                    <div class="flex items-center">
                        <a href="#"><img src="./images/logo.png" className="h-8" alt="" /></a>
                        <span class="ml-2 text-2xl font-bold dark:text-white">Skillify</span>
                    </div>

                    <div class="flex flex-wrap justify-center mt-6 -mx-4">
                        <a href="#" class="mx-4 my-2 text-sm text-gray-600 transition-colors duration-300 hover:text-[#0038FF] dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Home </a>
                        <a href="#" class="mx-4 my-2 text-sm text-gray-600 transition-colors duration-300 hover:text-[#0038FF] dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> About </a>
                        <a href="#" class="mx-4 my-2 text-sm text-gray-600 transition-colors duration-300 hover:text-[#0038FF] dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Teams </a>
                        <a href="#" class="mx-4 my-2 text-sm text-gray-600 transition-colors duration-300 hover:text-[#0038FF] dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Privacy </a>
                        <a href="#" class="mx-4 my-2 text-sm text-gray-600 transition-colors duration-300 hover:text-[#0038FF] dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Cookies </a>
                    </div>
                </div>

                <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                <div class="flex flex-col items-center sm:flex-row sm:justify-between mx-10">
                    <p class="text-sm text-gray-500 dark:text-gray-300">© 2024 skillify. All Rights Reserved. <br /> Privacy Policy | Cookie Policy. </p>
                    <div class="flex ">
                        <a href="#" class="mx-3 text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-[#0038FF]" aria-label="Reddit"><FaReddit className='size-7' /></a>
                        <a href="#" class="mx-3 text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-[#0038FF]" aria-label="Facebook"><FaFacebook className='size-7' /></a>
                        <a href="#" class="mx-3 text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-[#0038FF]" aria-label="Github"><FaGithub className='size-7' /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;