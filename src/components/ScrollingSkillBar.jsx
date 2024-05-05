import React, { useState, useEffect, useRef } from 'react';
import '../styles/ScrollingSkillBar.css';

const ScrollingSkillBar = ({ skills, users, onFilterChange }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const skillContainerRef = useRef(null);
  const [totalSkillWidth, setTotalSkillWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (!isHovering && Math.abs(currentPosition) >= totalSkillWidth) {
        // Pause animation when hovering and reset position when reaching the end
        setCurrentPosition(0);
      } else if (!isHovering) {
        // Animate only when not hovering
        setCurrentPosition((prevPosition) => prevPosition - 0.0002); // Adjust speed here
      }
    }, 300); // Adjust animation interval here

    return () => clearInterval(animationInterval);
  }, [totalSkillWidth, isHovering]);

  useEffect(() => {
    if (skillContainerRef.current) {
      const totalSkillWidth = skillContainerRef.current.offsetWidth;
      setTotalSkillWidth(totalSkillWidth); // Store total width in state
    }
  }, [skills]); // Recalculate on skill changes

  const handleMouseEnter = (event) => {
    setIsHovering(true);
  };

  const handleMouseLeave = (event) => {
    setIsHovering(false);
  };

  const handleClick = (skill) => {
    // Filter users based on clicked skill
    const filteredUsers = users.filter((user) => user.skills.includes(skill));
    onFilterChange(filteredUsers); // Call provided callback with filtered users
  };

  return (
    <div className="scrolling-skill-bar" ref={skillContainerRef}>
      <div
        className={`skill-container ${isHovering ? 'paused' : ''}`} // Apply 'paused' class when hovering
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {skills.map((skill, index) => (
          <button key={skill} className="skill" onClick={() => handleClick(skill)}>
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScrollingSkillBar;
