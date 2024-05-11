import React, { useState, useEffect } from 'react';
import { userListProps } from '../components/UserList';
import UserSkillsData from '../components/UserSkillsData';
import { FaReddit } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Explore = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const filterUsers = (users, selectedSkills) => {
    if (!selectedSkills.length) return users;

    return users.filter(user => {
      const hasSelectedSkill = user.skills.some(skill => selectedSkills.includes(skill));
      return hasSelectedSkill;
    });
  };

  return (
    <>
      <UserSkillsData />

      <div className="user-list bg-[#070A0E] shadow-md px-12 py-12">
        {isLoading && <p className="text-center text-gray-500 mb-4">Loading users...</p>}
        {error && <p className="text-center text-red-500 mb-4">Error fetching users: {error.message}</p>}
        {userListProps.length > 0 && (
          <div className="user-cards grid grid-cols-3 gap-6 px-20">
            {userListProps.map((user) => (
              <UserCard key={user._id} user={user} /> 
            ))}
          </div>
        )}
      </div>
      
      <footer className="px-20 py-20  bg-[#070A0E]">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center">
                            <a href="#"><img src="./public/images/logo.png" className="h-8" alt="" /></a>
                            <span className="ml-2 text-2xl font-bold dark:text-white">Skillify</span>
                        </div>

                        <div className="flex flex-wrap justify-center mt-6 -mx-4">
                            <a href="#" className="mx-4 my-2 text-sm text-gray-600 transition-colors duration-300 hover:text-[#0038FF] dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Home </a>
                            <a href="#" className="mx-4 my-2 text-sm text-gray-600 transition-colors duration-300 hover:text-[#0038FF] dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> About </a>
                            <a href="#" className="mx-4 my-2 text-sm text-gray-600 transition-colors duration-300 hover:text-[#0038FF] dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Teams </a>
                            <a href="#" className="mx-4 my-2 text-sm text-gray-600 transition-colors duration-300 hover:text-[#0038FF] dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Privacy </a>
                            <a href="#" className="mx-4 my-2 text-sm text-gray-600 transition-colors duration-300 hover:text-[#0038FF] dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Cookies </a>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                    <div className="flex flex-col items-center sm:flex-row sm:justify-between mx-10">
                        <p className="text-sm text-gray-500 dark:text-gray-300">© 2024 skillify. All Rights Reserved. <br /> Privacy Policy | Cookie Policy. </p>
                        <div className="flex ">
                            <a href="#" className="mx-3 text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-[#0038FF]" aria-label="Reddit"><FaReddit className='size-7' /></a>
                            <a href="#" className="mx-3 text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-[#0038FF]" aria-label="Facebook"><FaFacebook className='size-7' /></a>
                            <a href="#" className="mx-3 text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-[#0038FF]" aria-label="Github"><FaGithub className='size-7' /></a>
                        </div>
                    </div>
                </div>
            </footer>
    </>
  );
};

export default Explore;