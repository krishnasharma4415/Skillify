import React from "react";
import { useState } from "react";
import ScrollingSkillBar from "./ScrollingSkillBar";
import '../styles/ScrollingSkillBar.css';

const UserSkillsData = () => {

  const [userSkills, setUserSkills] = useState([
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "C#",
    "Machine Learning",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "Cloud Computing",
    "UI/UX Design",
    "Ethical Hacking",
    "Cybersecurity",
    "DevOps",
    "Database Management",
    "Software Testing",
    "Project Management",
    "Agile Methodology",
    "Git",
    "HTML",
    "CSS",
    "Bootstrap",
    "Material UI",
    "Angular",
    "Vue.js",
    "SQL",
    "NoSQL",
    "Cloud Platforms (AWS, Azure, GCP)",
    "API Development",
    "Microservices Architecture",
    "Content Management Systems (CMS)",
    "SEO",
    "Social Media Marketing",
    "Content Marketing",
    "Copywriting",
    "Graphic Design",
    "User Experience (UX) Research",
    "Usability Testing",
    "Information Security",
    "Network Security",
    "Cloud Security",
    "Blockchain",
    "Internet of Things (IoT)",
    "Artificial Intelligence (AI)",
    "Natural Language Processing (NLP)",
  ]);



  return (
    <>
      <nav className=" bg-[#070A0E] ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <a href="" className="flex items-center space-x-3 ">
            <img src="./images/logo.png" className="h-8" alt="" />
            <span className=" text-2xl font-bold whitespace-nowrap dark:text-white"></span>
          </a>
        </div>
      </nav>
      <div className="explore flex flex-col px-20 bg-[#070A0E]">
        <h1 className="text-3xl justify-center items-center font-bold dark:text-gray-200 text-center pt-10 pb-12">Discover Our Community Members</h1>
        <ScrollingSkillBar skills={userSkills} />
      </div>
    </>
  );
};
export default UserSkillsData;

