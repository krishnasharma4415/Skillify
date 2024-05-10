import React, { useState } from 'react';
import Chat from "../components/Chat";
import { IoIosChatbubbles } from "react-icons/io";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

function Profile() {
  const [profileData, setProfileData] = useState({
    name: '',
    bio: '',
    DesiredSkills: [],
    OfferedSkills: [],
    education: '',
    experience: '',
    projects: '',
    socialMedia: '',
  });

  const [editingThumbnail, setEditingThumbnail] = useState(null);

  const [skillsList, setSkillsList] = useState([
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditClick = (title) => {
    if (editingThumbnail === title) return;
    setEditingThumbnail(editingThumbnail === title ? null : title);
  };

  const handleAddSkill = (skill, type) => {
    setProfileData((prevData) => {
      const updatedData = { ...prevData };

      updatedData[type] = [...(prevData?.[type] || []), skill];

      return updatedData;
    });
  };


  const handleRemoveSkill = (skill, type) => {
    setProfileData((prevData) => ({
      ...prevData,
      [type]: prevData[type].filter((s) => s !== skill),
    }));
  };

  const SkillThumbnail = ({ title, content, skills }) => {
    const isEditing = editingThumbnail === title;

    return (
      <div
        className={`thumbnail bg-gray-800 p-4 overflow-y-scroll max-h-2/4 w-80 rounded shadow-md ${isEditing ? 'border border-gray-500' : ''
          }`}
        onClick={(event) => {
          handleEditClick(title);
          event.stopPropagation();
        }}
      >
        <div className="flex justify-between text-white">
          <h3>{title}</h3>
          <button className="">
            <select
              className="w-32 bg-gray-800"
              onChange={(event) => handleAddSkill(event.target.value, title)}
            >
              <option value="">-- Add Skill --</option>
              {skillsList.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </button>
        </div>
        <div className="xh-80 flex flex-wrap">
          {skills.map((skill) => (
            <button key={skill} className="skill-chip flex items-center mr-2 mb-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              {skill}
              <button className="ml-2 w-4 fill-current text-red-500"
                onClick={() => handleRemoveSkill(skill, title)}>
                x
              </button>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const Thumbnail = ({ title, content, handleEditClick }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(content || '');

    const handleEdit = () => {
      setIsEditing(!isEditing);
      setEditContent(content);
    };

    const handleSave = () => {
      setIsEditing(false);
      handleEditClick(editContent);
    };

    return (
      <div className={`thumbnail bg-gray-800 p-4 w-80 rounded shadow-md`}>
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <div className="overflow-y-scroll">
          {isEditing ? (
            <textarea
              className="w-full h-24 border border-gray-600 rounded px-2 py-1 text-gray-600"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
          ) : (
            <ul className="list-disc pl-4 text-gray-600">
              {content.split('\n').map((item, index) => (
                <li key={index} className="mb-2">
                  {item.trim()}
                </li>
              ))}
            </ul>
          )}
          <div className=" mt-2 h-40">
            {!isEditing && (
              <button
                className="text-blue-500 hover:underline"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
            {isEditing && (
              <>
                <button className="text-green-500 hover:underline mr-2" onClick={handleSave}>
                  Save
                </button>
                <button className="text-red-500 hover:underline" onClick={handleEdit}>
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  const handleChatClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = (message) => {
    setChatMessages([...chatMessages, message]);
  };

  return (
    <>
      <div className="flex w-screen h-screen bg-[#070A0E] p-12">
        <div className="w-1/3 mr-16 bg-[#070A0E]">
          <div className="flex flex-col items-start">
            <div className="rounded-full w-48 h-48 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2714275/pexels-photo-2714275.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Profile Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white text-left mt-6">
              <h2 className="text-2xl font-bold inline-flex items-center">
                John Doe
                <IoIosChatbubbles
                  className="ml-20 pt-3 size-12 text-[#0038FF] transition-all duration-300 hover:text-[#cecece]"
                  title="Open Chat"
                  onClick={handleChatClick}
                />
              </h2>
              <p className="text-lg">Software Engineer</p>
              <p className="text-gray-400 mt-2">
                Highly skilled and innovative Software Engineer with a passion for developing cutting-edge software solutions.
                Proficient in multiple programming languages and experienced in full-stack development.
                Strong problem-solving abilities and a proven track record of delivering high-quality, scalable software applications.
              </p>
            </div>
            <div className="text-gray-200 mr-4 mt-4 text-xl font-bold">Social Profiles</div>
            <div className="flex justify-start mt-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="mr-4 text-[#0038FF] hover:text-blue-200 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="mr-4 text-[#0038FF] hover:text-gray-200 transition duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#0038FF] hover:text-blue-200 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-[680px] bg-[#070A0E] border-gray">
          <div className="flex h-80 justify-between m-4">
            <SkillThumbnail
              title="DesiredSkills"
              content={profileData.DesiredSkills.length ? profileData.DesiredSkills.join(', ') : null}
              skills={profileData.DesiredSkills}
            />
            <SkillThumbnail
              title="OfferedSkills"
              content={profileData.OfferedSkills.length ? profileData.OfferedSkills.join(', ') : null}
              skills={profileData.OfferedSkills}
            />
          </div>
          <div className="flex h-80 justify-between m-4">
            <Thumbnail
              title="Education"
              content={profileData.education}
              handleEditClick={(updatedEducation) => setProfileData((prevData) => ({ ...prevData, education: updatedEducation }))}
            />
            <Thumbnail
              title="Experience"
              content={profileData.experience}
              handleEditClick={(updatedExperience) => setProfileData((prevData) => ({ ...prevData, experience: updatedExperience }))}
            />
          </div>

          {isChatOpen && (
            <div className="fixed top-72 right-20 z-50 shadow rounded p-4">
              <Chat />
              <button onClick={handleChatClick} className="text-white bg-red-700 py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out ml-40 mt-4">Close Chat</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
