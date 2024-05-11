import React, { useState, useEffect, useRef } from "react";
import '../styles/Scroll.css';

const UserSkillsData = () => {
  const [userSkills, setUserSkills] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const skillContainerRef = useRef(null);
  const [totalSkillWidth, setTotalSkillWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/skills')
      .then(response => response.json())
      .then(data => {
        const skillNames = data.map(skill => skill.name);
        setUserSkills(skillNames);
      })
      .catch(error => console.error('Error fetching skills:', error));
  }, []);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (!isHovering && Math.abs(currentPosition) >= totalSkillWidth) {
        setCurrentPosition(0);
      } else if (!isHovering) {
        setCurrentPosition((prevPosition) => prevPosition - 0.0002);
      }
    }, 300);

    return () => clearInterval(animationInterval);
  }, [totalSkillWidth, isHovering]);

  useEffect(() => {
    if (skillContainerRef.current) {
      const totalSkillWidth = skillContainerRef.current.offsetWidth;
      setTotalSkillWidth(totalSkillWidth);
    }
  }, [userSkills]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = (skill) => {
    console.log("Clicked on skill:", skill);
  };

  return (
    <>
      <nav className="bg-[#070A0E]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <a href="" className="flex items-center space-x-3 ">
            <img src="./images/logo.png" className="h-8" alt="" />
            <span className="text-2xl font-bold whitespace-nowrap dark:text-white"></span>
          </a>
        </div>
      </nav>
      <div className="explore flex flex-col px-20 bg-[#070A0E]">
        <h1 className="text-3xl justify-center items-center font-bold dark:text-gray-200 text-center pt-10 pb-12">Discover Our Community Members</h1>
        <div className="scrolling-skill-bar" ref={skillContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div className={`skill-container ${isHovering ? 'paused' : ''}`}>
            {userSkills.map((skill, index) => (
              <button key={index} className="skill" onClick={() => handleClick(skill)}>
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSkillsData;
